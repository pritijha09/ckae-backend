const cloudinary = require('../config/cloudinary');

const streamifier = require('streamifier');

const uploadToCloudinary =
(file) => {

    return new Promise(
        (resolve, reject) => {

            const stream =
                cloudinary.uploader.upload_stream(
                    {
                        folder:
                        'cake-shop/products'
                    },

                    (
                        error,
                        result
                    ) => {

                        if (error) {

                            reject(error);

                        } else {

                            resolve(result);
                        }
                    }
                );

            streamifier
                .createReadStream(
                    file.buffer
                )
                .pipe(stream);
        });
};

module.exports = uploadToCloudinary;