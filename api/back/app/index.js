const express = require("express");
const app = express();

const morgan = require("morgan");

const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');

const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'My API',
      description: 'My API documentation',
      version: '1.0.0',
    },
  },
  apis: ['./swagger/index.js'], // Path to the Swagger configuration file
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

require("dotenv").config();

require("./db");

const cors = require("cors");
var corsOptions = {
  origin: '*' 
};
app.use(cors(corsOptions));

// set up route logger tools
app.use(morgan("dev"));
app.use((req, res, next) => {
  console.log(`${Date(Date.now())}`);
  next();
});

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

app.get("/", (req, res) => {
  res.send({
    agro_info: "It's working! 🙌"
  })
});

// require("./token/controller").register({
//   "stir": "123456789",
//   "password": "abcdefQWERTY",
//   "role": "admin"
// });
// require("./token/controller").getAll();

app.use("/auth", require("./token/routes"));
app.use("/organisation", require("./token/middleware").requireAuth, require("./organisation/routes"));

// set port, listen for requests
const PORT = process.env.PORT || 1234;
app.listen(PORT, () => {
  console.log(`Port: ${PORT} ✅`);
});

require("./cron");