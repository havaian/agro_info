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
 
router.get("/token/get/:id", (req, res) => {
  controllers.getToken(req, res);
});
 
router.post("/token/save/:id", (req, res) => {
  controllers.saveToken(req, res);
});
 
router.get("/token/validate/:id", (req, res) => {
  controllers.validateToken(req, res);
});

module.exports = router;