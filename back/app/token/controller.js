const model = require('./model');

// Create user
exports.create = (req, res) => {
    const data = new model(req.body);
    try {
        model.find({ stir: req.body.stir })
        .then(result => {
            if (result.length != 0) {
                res.status(400).send('❎ User already exists');
            } else {
                data.save()
                .then(response => {
                    console.log(response);
                    if (response.length != 0) {
                        res.status(201).send(response);
                    } else {
                        res.status(400).send('❎ Could not create the user');
                    }
                });
            }
        });
    } catch (err) {
        res.status(500).send(err);
    }
};

// Login user
exports.login = (req, res) => {
    try {
        console.log(req.params.id);
        model.find({ stir: req.params.id }).then(result => {
            if (result.length != 0) {
                if (req.body.password === result.password) {
                    res.status(200).send(result);
                }
            } else {
                res.status(204).send('❎ Could not perform login for the user');
            }
        });
    } catch (err) {
        res.status(500).send(err);
    }
};

// Save token for user
exports.delete = (req, res) => {
    try {
        model.findOneAndDelete({ stir: req.params.id }).then(result => {
            if (result.length != 0) {
                if (req.body.password === result.password) {
                    res.status(200).send(result);
                }
            } else {
                res.status(204).send('❎ Could not perform login for the user');
            }
        });
    } catch (err) {
        
    }
}