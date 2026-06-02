const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

router.post("/", async (req, res) => {

  const contact = new Contact({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message
  });

  await contact.save();

  res.json({
    message: "Message Sent Successfully"
  });
});

module.exports = router;