const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./model');

function generateSecret() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?';
  const length = 128;
  let secret = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    secret += characters.charAt(randomIndex);
  }

  return secret;
}

exports.register = async (data) => {
  const { stir, password, role } = data;   

  try {
    const hashed_pass = await bcrypt.hash(password, 10);
  
    const newUser = new User({
      stir: stir,
      password: hashed_pass, 
      role: role,
      secret: generateSecret()
    });
  
    await newUser.save()
    
    return stir;
  } catch (err) {
    console.log(err);
    return false;
  }
};

exports.login = async (req, res) => {
  const { stir, password } = req.body;

  const user = await User.findOne({ stir });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    console.log('❌ Invalid credentials');
    return res.status(401).json({ message: '❌ Invalid credentials' });
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

// Retrieve all users from the database
exports.get = (req, res) => {
  try {
    User.findOne({ stir: req.params.id })
    .select('-_id -__v -password -secret')
    .then(result => {
      if (result) {
        if (result.length != 0) {
          res.status(200).send(result);
        } else {
          console.log('❌ Nothing to show');
          res.status(204).send('❌ Nothing to show');
        }
      }
    });
  } catch (err) {
    res.status(500).send(err);
  }
};

// Retrieve all users from the database
exports.getAll = (req, res) => {
  try {
    User.find()
    .select('-_id -__v')
    .then(result => {
      if (result) {
        if (result.length != 0) {
          console.log(result);
          // res.status(200).send(result);
        } else {
          console.log('❌ Nothing to show');
          // res.status(204).send('❌ Nothing to show');
        }
      }
    });
  } catch (err) {
    res.status(500).send(err);
  }
};

// Update particular user by the stir in the request
exports.update = (req, res) => {
  try {
    User.findOneAndUpdate({ stir: req.body.stir }, req.body, { new: true })
    .select('-_id -__v')
    .then(result => {
      if (result) {
        if (result.length != 0) {
          console.log("✅ Updated successfully!", result);
          res.status(200).send("✅ Updated successfully!");
        } else {
          console.log('❌ No user found to update');
          res.status(404).send('❌ No user found to update');
        }
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

// Delete particular user by the stir in the request
exports.delete = (stir) => {
  try {
      User.findOneAndDelete({ stir: stir })
      .then(result => {
        if (result) {
          if (result.length != 0) {
            console.log(`✅ Deleted successfully [${result._id}]`);
          } else {
            console.log('❌ No user found to delete');
          }
        }
      });
      return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

// Delete all users from the database
exports.deleteAll = (req, res) => {
  try {
    User.deleteMany()
    .then(result => {
      if (result) {
        if (result.length != 0) {
          if (result.acknowledged === true) {
            console.log(result);
            // res.status(200).send(result);
          }
        } else {
          console.log('❌ Could not delete users');
          res.status(400).send('❌ Could not delete users');
        }
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};