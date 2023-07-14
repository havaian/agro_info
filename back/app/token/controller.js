const user_model = require('./model');

// Find particular user with a stir
exports.validateToken = (req, res) => {
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

exports.getToken = (req, res) => {
    try {
        
    } catch (err) {
        
    }
}

exports.saveToken = (req, res) => {
    try {
        
    } catch (err) {
        
    }
}