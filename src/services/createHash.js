const { createHmac } = require('crypto');
const SECRET_KEY = require('../auth/secret');

module.exports = async (password) => await createHmac('md5', SECRET_KEY).update(password).digest('hex');