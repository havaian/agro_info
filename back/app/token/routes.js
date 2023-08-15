const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/', (req, res) => {
    res.json({ 
        auth: `It's working! 🙌`
    });
});

router.post('/login', controller.login);
router.post('/register', controller.register);
router.get('/user/:id', require("./middleware").requireAuth, controller.get);

module.exports = router;