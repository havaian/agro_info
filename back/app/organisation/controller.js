const model = require('./model');

// Create user
exports.addOneUser = (data, res) => {
    const new_data = new model(data);
    try {
        model.find({ stir: data.stir })
        .then(response => {
            if (response.length != 0) {
                res.status(400).send('❎ Data already exists');
            } else {
                require("../token/controller").register({ 
                    stir: req.body.stir, 
                    password: req.body.password, 
                    role: req.body.role 
                });
                new_data.save()
                .then(result => {
                    if (result.length != 0) {
                        res.status(201).send(result);
                    } else {
                        res.status(400).send('❎ Could not add the data');
                    }
                });
            }
        });
    } catch (err) {
        res.status(500).send(err);
    }
};

// Retrieve one user from the database
exports.getOneUser = (req, res) => {
    try {
        model.find({ stir: req.params.id }).then(result => {
            if (result.length != 0) {
                res.status(200).send(result);
            } else {
                res.status(204).send('❎ No data to show');
            }
        });
    } catch (err) {
        res.status(500).send(err);
    }
};

// Retrieve all users from the database
exports.getAllUsers = (req, res) => {
    try {
        model.find().then(result => {
            if (result.length != 0) {
                res.status(200).send(result);
            } else {
                res.status(204).send('❎ No data to show');
            }
        });
    } catch (err) {
        res.status(500).send(err);
    }
};

// Update particular user by the stir in the request
exports.updateOneUser = (req, res) => {
    try {
        model.findOneAndUpdate({ stir: req.params.id }, req.body, { new: true }).then(result => {
            if (result.length != 0) {
                res.status(200).send(result);
            } else {
                res.status(404).send('❎ No data found to update');
            }
        });
    } catch (err) {
        res.status(500).send(err);
    }
};

// // Update all users
// exports.updateAllUsers = (req, res) => {
//     try {
//         model.updateMany({}, { $unset: { role: 1 } }, { new: true }).then(result => {
//             if (result.length != 0) {
//                 console.log(result);
//                 // res.status(200).send(result);
//             } else {
//                 // res.status(404).send('❎ No data found to update');
//             }
//         });
//     } catch (err) {
//         res.status(500).send(err);
//     }
// };

// Delete user with the specified stir in the request
exports.deleteOneUser = (req, res) => {
    try {
        model.findOneAndDelete({ stir: req.params.id }).then(result => {
            if (result.length != 0) {
                res.status(200).send(result);
            } else {
                res.status(404).send('❎ No data found to delete');
            }
        });
    } catch (err) {
        res.status(500).send(err);
    }
};

// // Delete all user from the database
// exports.deleteAllUsers = (req, res) => {
//     try {
//         model.deleteMany().then(result => {
//             if (result.length != 0) {
//                 if (result.acknowledged === true) {
//                     console.log(result);
//                     // res.status(200).send(result);
//                 }
//             } else {
//                 // res.status(400).send('❎ Could not delete the data');
//             }
//         });
//     } catch (err) {
//         // res.status(500).send(err);
//     }
// };