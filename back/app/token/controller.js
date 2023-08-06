const bcrypt = require('bcrypt');
const User = require('./model');

// exports.register = async (req, res) => {
exports.register = async (data) => {
  // const { stir, password } = req.body;
  const { stir, password, role } = data;

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    stir: stir,
    password: hashedPassword, 
    role: role
  });

  await newUser.save();

  res.status(201).json({ message: 'User registered successfully' });
};

exports.login = async (req, res) => {
  const { stir, password } = req.body;

  const user = await User.findOne({ stir });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const expirationTime = new Date(Date.now() + 24 * 60 * 60 * 1000);
  
  const user_data = {
    id: user._id,
    stir: stir,
    role: user.role,
    expires: expirationTime
  }

  // Set a cookie or session to indicate the user is logged in
  res.cookie('user_data', user_data, { httpOnly: true, expires: expirationTime });
  res.status(200).json({ message: 'Logged in successfully', user_data: user_data });
};

exports.logout = (req, res) => {
  // Clear the cookie or session to log the user out
  res.clearCookie('user_data');
  res.status(200).json({ message: 'Logged out successfully' });
};

// Retrieve all users from the database
exports.getAllUsers = (req, res) => {
  try {
    User.find().then(result => {
      if (result.length != 0) {
        res.status(200).send(result);
      } else {
        res.status(204).send('❎ Nothing to show');
      }
    });
  } catch (err) {
    res.status(500).send(err);
  }
};

// Update particular user by the stir in the request
exports.updateOneUser = (req, res) => {
  try {
      model.findOneAndUpdate({ stir: req.body.stir }, req.body, { new: true }).then(result => {
          if (result.length != 0) {
              res.status(200).send(result);
          } else {
              res.status(404).send('❎ No user found to update');
          }
      });
  } catch (err) {
      res.status(500).send(err);
  }
};

// Update all users in the database
exports.updateAllUsers = (req, res) => {
  try {
    User.updateMany({ $set: { role: "user" } }).then(result => {
      if (result.length != 0) {
        if (result.acknowledged === true) {
          res.status(200).send(result);
        }
      } else {
        res.status(400).send('❎ Could not update users');
      }
    });
  } catch (err) {
    // res.status(500).send(err);
  }
};

// Delete particular user by the stir in the request
exports.deleteOneUser = (req, res) => {
  try {
      model.findOneAndDelete({ stir: req.body.stir }).then(result => {
          if (result.length != 0) {
              res.status(200).send(result);
          } else {
              res.status(404).send('❎ No user found to delete');
          }
      });
  } catch (err) {
      res.status(500).send(err);
  }
};

// Delete all users from the database
exports.deleteAllUsers = (req, res) => {
  try {
    User.deleteMany().then(result => {
      if (result.length != 0) {
        if (result.acknowledged === true) {
          res.status(200).send(result);
        }
      } else {
        res.status(400).send('❎ Could not delete users');
      }
    });
  } catch (err) {
    // res.status(500).send(err);
  }
};