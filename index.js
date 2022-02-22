const express = require("express");
const routes = require("./routes/NemRoutes");
const PORT = 8070;

const app = express();

app.use(routes);

app.listen(PORT, async () => {
  console.log(`Nem API is running with the server up on port: ${PORT}`);
});
