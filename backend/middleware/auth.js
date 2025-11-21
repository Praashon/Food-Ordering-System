import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  //next is a callback function
  const { token } = req.headers;
  
  if (!token) {
    return res.json({ success: false, message: "Not Authorized Login!" });
  }
  try {
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = tokenDecode.id;
    req.userId = tokenDecode.id; // Also store in req object directly
    next();
  } catch (error) {
    console.log("Auth middleware error:", error);
    res.json({ success: false, message: "Invalid Token" });
  }
};

export default authMiddleware;
