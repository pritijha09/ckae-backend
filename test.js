const dns = require('dns');

dns.resolveSrv(
  '_mongodb._tcp.cakeshop-cluster.smxmsvv.mongodb.net',
  (err, records) => {
    console.log('ERR:', err);
    console.log('RECORDS:', records);
  }
);