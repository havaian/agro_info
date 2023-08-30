const mongoose = require("mongoose");

console.log(process.env.DB_URL);

mongoose.connect(process.env.DB_URL)
.then(() => {
  console.log("MongoDB ✅");
})
.catch(err => {
  console.log("MongoDB ❌", err);
  process.exit();
});