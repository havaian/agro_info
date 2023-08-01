const express = require("express");
const bodyParser = require("body-parser");

const router = express.Router();

const controllers = require('./controller');

// parse requests of content-type - application/json
router.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: true }));

router.get("/", (req, res) => {
  res.json({ 
    agro_info: `It's working! 🙌`
  });
});
 
router.get("/user/login/:id", (req, res) => {
  controllers.login(req, res);
});
 
router.post("/user/create", (req, res) => {
  controllers.create(req, res);
});
 
router.post("/user/delete", (req, res) => {
  controllers.save(req, res);
});

module.exports = router;