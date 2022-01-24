const express = require("express");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const app = express();
const port = 8000;

const { User } = require("./models");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

app.post("/login", async (req, res) => {
  let { login, password } = req.body;
  const user = await User.findOne({ where: { login } });
  if (user === null) return res.json({ err: "L'user existe pas" });
  if (!bcrypt.compareSync(password, user.password))
    return res.json({ err: "Le MDP est faux" });
  res.json(user);
});

app.post("/signup", async (req, res) => {
  let { login, password, passwordbis, firstName } = req.body;
  let user = await User.findOne({ where: { login } });
  if (user) return res.json({ err: "L'user existe deja" });
  if (password !== passwordbis)
    return res.json({ err: "Frerot les MDP identique" });
  user = await User.create({ login, password, firstName });
  res.json(user);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
