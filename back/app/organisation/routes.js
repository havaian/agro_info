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
    organisation: `It's working! 🙌`
  });
});

router.post('/new', (req, res) => {
  controllers.add(req, res);
});

router.get("/get/all", (req, res) => {
  controllers.getAll(req, res);
});
 
router.get("/get", (req, res) => {
  controllers.getSearched(req, res);
});
 
router.post("/get", (req, res) => {
  controllers.getStirs(req, res);
});
 
router.get("/get/:id", (req, res) => {
  controllers.get(req, res);
});

router.put("/update/:id", (req, res) => {
  controllers.update(req, res);
});

// router.post("/delete/all", (req, res) => {
//   controllers.deleteAll(req, res);
// });

router.delete("/delete/:id", (req, res) => {
  controllers.delete(req, res);
});

module.exports = router;