const express = require("express");
const bcrypt = require("bcrypt");

const { User } = require("../models");

const router = express.Router();

router.post("/signin", async (req, res) => {
  let { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  if (user === null)
    return res.json({ err: "L'user existe pas", target: "login" });
  if (!bcrypt.compareSync(password, user.password))
    return res.json({ err: "Le MDP est faux", target: "password" });
  res.json(user);
});

router.post("/signup", async (req, res) => {
  let { email, password, passwordbis, firstName, lastName } = req.body;
  let user = await User.findOne({ where: { email } });
  if (user) return res.json({ err: "L'user existe deja" });
  if (password !== passwordbis)
    return res.json({ err: "Frerot les MDP identique" });
  user = await User.create({ email, password, firstName, lastName });
  res.json(user);
});


module.exports = router;