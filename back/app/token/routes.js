const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/', (req, res) => {
    res.json({ 
        auth: `It's working! 🙌`
    });
});

router.post('/register', controller.register);
router.post('/login', controller.login);
router.post('/logout', controller.logout);
router.delete('/delete', controller.deleteOneUser);

module.exports = router;