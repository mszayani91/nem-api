const express = require("express");

const PORT = 8070;

const app = express();

app.listen(PORT, async () => {
  console.log(`server up running on port: ${PORT}`);
});
