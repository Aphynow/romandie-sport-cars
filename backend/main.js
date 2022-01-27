const express = require("express");

const bodyParser = require("body-parser");
const app = express();
const port = 8000;

const { User } = require("./models");

const { login, member } = require("./router");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(login);
app.use("/member",member);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
