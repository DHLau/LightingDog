
 var crypto = require('crypto');

 exports.hash = function (str) {
    return crypto.createHash('sha1').update(str).digest('hex');
};
 //md5加密
 exports.md5 = function (str) {
    return crypto.createHash('md5').update(str).digest('hex');
};

exports.hmac = hmac = function(password){
    var timestampStr = String(timestamp());
    return crypto.createHmac('sha1', password).update(timestampStr).digest('hex');
};

exports.toBase64 = function(str){
   return new Buffer(str).toString('base64');
};
