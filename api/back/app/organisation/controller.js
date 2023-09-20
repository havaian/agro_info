const model = require('./model');

// const stirs = require("../data/stirs.json");
// const users = require("../data/users.json");

// Create user
exports.add = async (req, res) => {
// exports.add = async (data) => {
    const register = require("../token/controller").register;
    // Omit "role" and "password" fields from req.body using destructuring and spread operator
    const { role, password, ...sanitizedBody } = req.body;
    // const { role, password, ...sanitizedBody } = data;

    const new_data = new model(sanitizedBody);
    if (!new_data.completed) {
        new_data.completed = false;
    }
    try {
        model.find({ stir: req.body.stir })
        // model.find({ stir: data.stir })
        .then(async response => {
            if (response.length != 0) {
                console.log(`❌ Data already exists: [${response[0]._id}]`,);
                res.status(400).send('❌ Data already exists');
            } else {
                const token = await register({ 
                    stir: req.body.stir, 
                    password: req.body.password, 
                    role: req.body.role 
                    // stir: data.stir, 
                    // password: users[data.stir], 
                    // role: "user"
                });
                if (token === req.body.stir) {
                // if (token === data.stir) {
                    new_data.save()
                    .then(result => {
                        if (result) {
                            if (result.length != 0) {
                                console.log("✅ User created successfully", token);
                                res.status(200).send("✅ User created successfully");
                            } else {
                                console.log('❌ Could not add the data', result);
                                res.status(400).send('❌ Could not add the data');
                            }
                        }
                    })
                    .catch(err => {
                        console.log('❌ Server error', err);
                        res.status(500).send('❌ Server error');
                    });
                } else {
                    console.log('❌ Could not add the data');
                    res.status(400).send('❌ Could not add the data');
                }
            }
        });
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

// for (let x in stirs) {
//     this.add(stirs[x]);
// }

// Retrieve one user from the database
exports.get = (req, res) => {
    try {
        model.find({ stir: req.params.id })
        .select('-_id -__v') // Exclude _id and __v fields
        .then(result => {
            if (result) {
                if (result.length != 0) {
                    res.status(200).send(result[0]);
                } else {
                    console.log('❌ No data to show', result);
                    res.status(200).send({});
                }
            }
        })
        .catch(err => {
            console.log('❌ Server error', err);
            res.status(500).send('❌ Server error');
        });
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

// Retrieve users with certain stirs sent in req body from the database
exports.getStirs = (req, res) => {
    try {
        model.find({ stir: { $in: req.body.stirs } })
        .select('-_id -__v') // Exclude _id and __v fields
        .then(result => {
            if (result) {
                if (result.length != 0) {
                    res.status(200).send(result);
                } else {
                    console.log('❌ No data to show', result);
                    res.status(200).send({});
                }
            }
        })
        .catch(err => {
            console.log('❌ Server error', err);
            res.status(500).send('❌ Server error');
        });
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

// Retrieve all users from the database
exports.getSearched = (req, res) => {
    const fieldsToSearch = [ "stir", "rasmiy_nomi", "tashkilot_raxbari_nomeri" ]; // Specify the fields to search

    try {
        const searchValue = req.query.search;

        let query = {};

        if (searchValue) {
            query.$or = fieldsToSearch.map(field => ({
                [field]: { $regex: searchValue, $options: 'i' }
            }));
        } else {
            res.status(400).send('Bad Request');
            return;
        }

        model.find(query)
        .select('-_id -__v') // Exclude _id and __v fields
        .then(result => {
            if (result && result.length !== 0) {
                res.status(200).send(result);
            } else {
                console.log('❌ No data to show', result);
                res.status(200).send({});
            }
            })
        .catch(err => {
            console.log('❌ Server error', err);
            res.status(500).send('❌ Server error');
        });
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

// Retrieve all users from the database
exports.getAll = (req, res) => {
    try {
        if (!req.query.completed) {
            model.find()
            .select('-_id -__v') // Exclude _id and __v fields
            .then(result => {
                if (result) {
                    if (result.length != 0) {
                        res.status(200).send(result);
                    } else {
                        console.log('❌ No data to show', result);
                        res.status(200).send({});
                    }
                }
            })
            .catch(err => {
                console.log('❌ Server error', err);
                res.status(500).send('❌ Server error');
            });
        } else {
            // model.find({ completed: req.query.completed })
            model.find({})
            .select('-_id -__v') // Exclude _id and __v fields
            .then(result => {
                if (result) {
                    if (result.length != 0) {
                        res.status(200).send(result);
                    } else {
                        console.log('❌ No data to show', result);
                        res.status(200).send({});
                    }
                }
            })
            .catch(err => {
                console.log('❌ Server error', err);
                res.status(500).send('❌ Server error');
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

// Retrieve completed users from the database
exports.getCompleted = (req, res) => {
    try {
        model.find({ completed: req.params.id })
        .select('-_id -__v') // Exclude _id and __v fields
        .then(result => {
            if (result) {
                if (result.length != 0) {
                    res.status(200).send(result);
                } else {
                    console.log('❌ No data to show', result);
                    res.status(200).send({});
                }
            }
        })
        .catch(err => {
            console.log('❌ Server error', err);
            res.status(500).send('❌ Server error');
        });
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

// Update particular user by the stir in the request
exports.update = async (req, res) => {
    const fieldsToCheck = require("./model_fields"); // List all fields that need to be checked

    // Check if all required fields are filled
    const allFieldsFilled = fieldsToCheck.every(field => req.body[field]);
    
    // Omit "role", "password", and "completed" fields from req.body using destructuring and spread operator
    const { role, password, completed, ...sanitizedBody } = req.body;

    try {
        model.findOne({ stir: req.params.id })
        .then(response => {
            if (response) {
                if (allFieldsFilled) {
                    sanitizedBody.completed = allFieldsFilled;
                }
                model.findByIdAndUpdate(response._id, sanitizedBody)
                .select('-_id -__v')
                .then(result => {
                    if (result.length != 0) {
                        res.status(200).send("✅ User updated successfully");
                    } else {
                        console.log('❌ No data to update', result);
                        res.status(404).send('❌ No data to update');
                    }
                }); 
            }
        })
        .catch(err => {
            console.log('❌ Server error', err);
            res.status(500).send('❌ Server error');
        });
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

// Update all users
exports.updateAll = (req, res) => {
    try {
        model.updateMany({}, { $set: { completed: false } }, { new: true })
        .select('-_id -__v')
        .then(result => {
            if (result) {
                console.log(result);
                if (result.length != 0) {
                    console.log(result);
                    // res.status(200).send(result);
                } else {
                    console.log('❌ No data to update', result);
                    // res.status(404).send('❌ No data to update');
                }
            }
        })
        .catch(err => {
            console.log('❌ Server error', err);
            // res.status(500).send('❌ Server error');
        });
    } catch (err) {
        console.log(err);
        // res.status(500).send(err);
    }
};
// this.updateAll();

// Delete user with the specified stir in the request
exports.delete = (req, res) => {
    try {
        model.findOneAndDelete({ stir: req.params.id })
        .then(result => {
            if (result) {
                if (result.length != 0) {
                    require("../token/controller").delete(req.params.id);
                    res.status(200).send("✅ User deleted successfully");
                } else {
                    console.log('❌ No data to delete', result);
                    res.status(404).send('❌ No data to delete');
                }
            }
        })
        .catch(err => {
            console.log('❌ Server error', err);
            res.status(500).send('❌ Server error');
        });
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

// Delete all user from the database
exports.deleteAll = (req, res) => {
    try {
        model.deleteMany()
        .then(result => {
            console.log(result);
            if (result) {
                if (result.length != 0) {
                    if (result.acknowledged === true) {
                        console.log(result);
                        // res.status(200).send(result);
                    }
                } else {
                    console.log('❌ Could not delete the data', result);
                    // res.status(400).send('❌ Could not delete the data');
                }
            }
        })
        .catch(err => {
            console.log('❌ Server', err);
            // res.status(500).send('❌ Server');
        });
    } catch (err) {
        console.log(err);
        // res.status(500).send(err);
    }
};