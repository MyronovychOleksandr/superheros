const db = require("./src/db");
const app = require("./src/app");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

db.then(
  app.listen(PORT, () => {
    console.log(`Server started on ${PORT} port...`);
  })
).catch((e) => {
  console.log(`Server not running. Error: ${e.message}`);
});
