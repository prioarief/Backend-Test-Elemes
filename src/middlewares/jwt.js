const jwt = require("jsonwebtoken");
const { decrypt } = require("../utilities/crypto");
const wrapper = require("../utilities/wrapper");
const userService = require("../module/user/service");

const userRoute = async (req, res, next) => {
  try {
    const isValid = jwt.verify(req.headers.authorization, process.env.JWT_KEY);
    const user = await userService.get({ id: decrypt(isValid?.id) });
    req.decoded = user;
    next();
  } catch (error) {
    if (error.name == "TokenExpiredError") {
      return wrapper(res, false, null, "Token Expired", 401);
    }
    return wrapper(res, false, null, "Invalid token", 401);
  }
};
const adminRoute = async (req, res, next) => {
  try {
    const isValid = jwt.verify(req.headers.authorization, process.env.JWT_KEY);
    const user = await userService.get({ id: decrypt(isValid?.id) });
    if (user.role_id !== 1 || user["Role.role"].toLowerCase() !== "admin")
      return wrapper(res, false, null, "access denied", 403);
    req.decoded = user;
    next();
  } catch (error) {
    if (error.name == "TokenExpiredError") {
      return wrapper(res, false, null, "Token Expired", 401);
    }
    return wrapper(res, false, null, "Invalid token", 401);
  }
};

module.exports = { userRoute, adminRoute };
