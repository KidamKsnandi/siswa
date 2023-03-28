const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const routerUser = require("./router/userRoute");
const routerBuku = require("./router/bukuRouter");

app.use(express.json());
app.use("/v1", routerUser);
app.use("/v1", routerBuku);

app.listen(3000, () => {
  console.log("Server Berjalan di Port : 3000");
});
