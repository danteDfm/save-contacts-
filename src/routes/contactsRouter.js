const express = require("express");
const router = express.Router();

const model = require("../models/mode");

router.get("/contacts", async (req, res) => {
  const data = await model.find().lean().sort({ date: "desc" });

  if (data.length == 0) {
    console.log("arreglo vacio");
  }

  res.render("contacts/contacts", { data });
});

router.get("/contacts/save", (req, res) => {
  res.render("contacts/saveContacts");
});

router.post("/contacts/save", async (req, res) => {
  const { name, contact, email } = req.body;

  let err = undefined;

  if (!name || !contact || !email) {
    console.log("hola mundo");
    err = true;
    res.render("contacts/saveContacts", { err });
    return;
  }

  const newData = new model({ name, contact, email });

  await newData.save();
  res.redirect("/contacts");
});

router.delete("/contacts/delete/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  await model.findByIdAndDelete(id);
  res.redirect("/contacts");
});

router.get("/contacts/update/:id", async (req, res) => {
  const { id } = req.params;
  const data = await model.findById({ _id: id }).lean();
  res.render("contacts/updateContacts", { data });
});

router.put("/contacts/update/:id", async (req, res) => {
  const { id } = req.params;
  const { name, contact, email } = req.body;

  const data = {
    name,
    contact,
    email,
  };

  await model.findByIdAndUpdate(id, data);
  res.redirect("/contacts");
});

module.exports = router;
