const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./model');

function generateRandomString() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?';
  const length = 128;
  let randomString = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }

  return randomString;
}

exports.register = async (data) => {
  const { stir, password, role } = data;

  try {
    const hashed_pass = await bcrypt.hash(password, 10);
  
    const newUser = new User({
      stir: stir,
      password: hashed_pass, 
      role: role,
      secret: generateRandomString()
    });
  
    await newUser.save();
  
    return true;
  } catch (err) {
    return err;
  }
};

exports.login = async (req, res) => {
  const { stir, password } = req.body;

  const user = await User.findOne({ stir });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  
  const user_data = {
    id: user._id
  }

  const token = jwt.sign(user_data, user.secret, {
    expiresIn: '24h'
  });

  res.cookie('user_stir', user.stir, {
    httpOnly: true,
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours
  });

  res.status(200).send({ token: token });
};

exports.logout = (req, res) => {
  // Clear the cookie or session to log the user out
  res.clearCookie('stir');
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
      User.findOneAndUpdate({ stir: req.body.stir }, req.body, { new: true }).then(result => {
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

// Delete particular user by the stir in the request
exports.deleteOneUser = (req, res) => {
  try {
      User.findOneAndDelete({ stir: req.body.stir }).then(result => {
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
          console.log(result);
          // res.status(200).send(result);
        }
      } else {
        res.status(400).send('❎ Could not delete users');
      }
    });
  } catch (err) {
    res.status(500).send(err);
  }
};