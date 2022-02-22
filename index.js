const express = require("express");
const routes = require("./routes/NemRoutes");
const mongoose = require("mongoose");
const dotenv = require("dotenv");



dotenv.config();
const PORT = process.env.PORT || 8070;
const app = express();

app.use(routes);

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection established with MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });


app.listen(PORT, async () => {
  console.log(`Nem API is running with the server up on port: ${PORT}`);
});
