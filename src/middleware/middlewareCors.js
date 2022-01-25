const cors = require('cors');

exports.middlewareCors = cors(), (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
	next();
}