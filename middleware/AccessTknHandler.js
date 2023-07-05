const asynchandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const TknValidation = asynchandler(async (req, res, next) => {
  let token;
  let AuthHeader = req.headers.Authorization || req.headers.authorization;
  if (AuthHeader && AuthHeader.startsWith("Bearer")) {
    token = AuthHeader.split(" ")[1];

    jwt.verify(token, process.env.ACCESS_TOKEN_SCR, (err, decoded) => {
      if (err) {
        res.status(401);
        throw new Error("Unauthorized user");
      }

      req.user = decoded.user;
    //   executes the next middleware in the middleware stack. If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging
      next();
    });
    
    if(!token){
        res.status(401);
        throw new Error("token undefined or Unauthorised user !");
    }

  }
});

module.exports = TknValidation;
