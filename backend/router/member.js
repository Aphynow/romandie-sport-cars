const express = require("express");

const { User } = require("../models");

const router = express.Router();

router.get("/one/:id", async (req, res) => {
  const { id } = req.params;
  const user = await User.findOne({ where: { id } });
  if (!user) return res.json(false);
  res.json(user);
});

router.get("/all", async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

router.put("/", async (req, res) => {
  let { id, firstName, lastName, email } = req.body;
  const user = await User.findOne({ where: { id } });
  if (!user) return res.json(false);

  await user.update({ firstName, lastName, email });
  await user.reload();

  res.json(user);
});

module.exports = router;
