const myLogger = (req, res, next) => {
    console.log('Logged');
    console.log(req.body);
    next();
  };
  
  module.exports = { myLogger };