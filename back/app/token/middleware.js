const User = require('./model');

exports.requireAuth = async (req, res, next) => {
  const user_data = req.cookies.user_data; // Assuming you're using cookies for authentication
  const url = req.url.split("/"); 
  
  if (user_data.role != "admin") {
    if (url[url.length - 1] === user_data.stir 
        && !url.includes("all") 
        && !url.includes("delete")) {
      if (user_data) {
        const user = await User.findById(user_data["id"]);
        if (user) {
          req.user = user;
          next();
        } else {
          res.status(401).json({ message: 'Unauthorized' });
        }
      } else {
        res.status(401).json({ message: 'Unauthorized' });
      }
    } else {
      res.status(401).json({ message: 'Unauthorized' });
    }
  } else {
    next();
  }
};