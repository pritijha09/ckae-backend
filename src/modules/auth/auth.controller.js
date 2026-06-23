const authService = require('./auth.service');

exports.register = async (req, res) => {
  try {
    const { firstName, lastName, email, mobileNumber, password } = req.body;

    if (!firstName || !lastName || !email || !mobileNumber || !password) {
      return res.status(400).json({
        success: false,
        message: 'Missing required registration fields: firstName, lastName, email, mobileNumber, password'
      });
    }

    const user = await authService.register(req.body);

    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      data: user
    });
  } catch (error) {
    console.error(error);

    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

exports.login = async (
    req,
    res
) => {
    try {
        const {email, password} = req.body;
      debugger
        const result = await authService.login(
            email,
            password
        );

        res.json({
            success: true,
            token: result.token
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

  exports.createSuperAdmin = async (
    req,
    res
) => {
        try {

            const result = await authService.createSuperAdmin(
                req.body
            );

            return res.status(201).json(result);

        } catch (error) {

            return res.status(400).json({
                success: false,
                message: error.message
            });
        }
    }