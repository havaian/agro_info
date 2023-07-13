const user_model = require('../model');

// Create and Save new user
exports.addOneUser = (req, res) => {
    const user_data = new user_model(req.body);
    try {
        user_data.save()
        .then(result => {
            if (result.length != 0) {
                res.status(201).send(result);
            } else {
                res.status(400).send('❎ Could not add the user');
            }
        });
    } catch (err) {
        res.status(500).send(err);
    }
};

// // Retrieve all users from the database
exports.getAllUsers = (req, res) => {
    try {
        user_model.find().then(result => {
            if (result.length != 0) {
                res.status(200).send(result);
            } else {
                res.status(204).send('❎ No user to show');
            }
        });
    } catch (err) {
        res.status(500).send(err);
    }
};

// Find particular user with a stir
exports.getOneUser = (req, res) => {
    try {
        user_model.find({ stir: req.params.id }).then(result => {
            if (result.length != 0) {
                res.status(200).send(result);
            } else {
                res.status(204).send('❎ Could not find the user');
            }
        });
    } catch (err) {
        res.status(500).send(err);
    }
};

// Update particular user by the stir in the request
exports.updateOneUser = (req, res) => {
    try {
        user_model.findOneAndUpdate({ stir: req.params.id }, req.body, { new: true }).then(result => {
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

// Delete user with the specified stir in the request
exports.deleteOneUser = (req, res) => {
    try {
        user_model.findOneAndDelete({ stir: req.params.id }).then(result => {
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



// Find particular user with a stir
exports.validateUser = (req, res) => {
    try {
        user_model.find({ stir: req.params.id }).then(result => {
            if (result.length != 0) {
                res.status(200).send(result);
            } else {
                res.status(204).send('❎ Could not find the user');
            }
        });
    } catch (err) {
        res.status(500).send(err);
    }
};

// // Delete all user from the database
// exports.deleteAllUsers = (req, res) => {
//     try {
//         user_model.deleteMany().then(result => {
//             if (result.length != 0) {
//                 if (result.acknowledged === true) {
//                     res.status(200).send(result);
//                 }
//             } else {
//                 res.status(400).send('❎ Could not delete the user');
//             }
//         });
//     } catch (err) {
//         res.status(500).send(err);
//     }
// };