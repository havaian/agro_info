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

router.get("/user/get/all", (req, res) => {
  controllers.getAllUsers(req, res);
});
 
router.get("/user/get/:id", (req, res) => {
  controllers.getOneUser(req, res);
});

router.post('/user/new', (req, res) => {
  controllers.addOneUser(req, res);
});

router.put("/user/update/:id", (req, res) => {
  controllers.updateOneUser(req, res);
});

router.delete("/user/delete/:id", (req, res) => {
  controllers.deleteOneUser(req, res);
});

// router.post("/form/delete/all", (req, res) => {
//   controllers.deleteAllUsers(req, res);
// });

module.exports = router;