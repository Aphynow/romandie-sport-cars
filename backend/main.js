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

app.post("/signin", async (req, res) => {
  let { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  if (user === null)
    return res.json({ err: "L'user existe pas", target: "login" });
  if (!bcrypt.compareSync(password, user.password))
    return res.json({ err: "Le MDP est faux", target: "password" });
  res.json(user);
});

app.post("/signup", async (req, res) => {
  let { email, password, passwordbis, firstName, lastName } = req.body;
  let user = await User.findOne({ where: { email } });
  if (user) return res.json({ err: "L'user existe deja" });
  if (password !== passwordbis)
    return res.json({ err: "Frerot les MDP identique" });
  user = await User.create({ email, password, firstName, lastName });
  res.json(user);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
