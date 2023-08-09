const User = require("./model");
const jwt = require("jsonwebtoken");

exports.requireAuth = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const userStir = req.cookies.user_stir;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    console.log("Unauthorized: Bearer token not found");
    return res.status(401).json({ message: "Unauthorized" });
  }

  const token = authHeader.replace("Bearer ", "");

  try {
    const user = await User.findOne({ stir: userStir });
    const decodedToken = jwt.verify(token, user.secret);

    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    if (decodedToken.id === user._id.toString()) {
      if (user.role === 'admin') {
        req.user = user;
        next();
      } else if (user.role === 'user') {
        const urlParts = req.url.split('/');
        const stirFromUrl = urlParts[urlParts.length - 1];
        if (stirFromUrl === user.stir && !req.url.includes("all")) {
          req.user = user;
          next();
        } else {
          res.status(401).json({ message: "Unauthorized" });
        }
      } else {
        res.status(401).json({ message: "Unauthorized" });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "Unauthorized" });   
  }
};