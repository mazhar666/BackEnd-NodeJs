const express = require("express"),
  router = express.Router(),
  pagesController = require("../controllers/pages.controller"),
  listsController = require("../controllers/lists.controller");

module.exports = router;

router.get("/", pagesController.showHome);
router.get("/contact", pagesController.showContact);

// lists Route
router.get("/lists", listsController.showLists);
// Create list Route
router.get("/create", listsController.create);
router.post("/store", listsController.store);
// Update list
router.get("/edit/:id", listsController.edit);
router.post("/update/:id", listsController.update);
// Show list Route
router.get("/lists/:id", listsController.showList);
// Delete list
router.get("/lists/:id/delete", listsController.deleteList);
// Contact page handler
const Contact = require("../models/contact"); // Import the Contact model

router.post("/contact", (req, res) => {
  const { name, email, subject, message } = req.body;

  // Create a new Contact instance
  const newContact = new Contact({
    name,
    email,
    subject,
    message,
  });

  // Save the data to the database
  newContact
    .save()
    .then(() => {
      // Redirect or render a success page
      res.redirect("/contact/success");
    })
    .catch((err) => {
      // Handle errors (e.g., render an error page or provide a user-friendly error message)
      console.error(err);
      res.redirect("/contact/error");
    });
});
router.get("/contact/success", (req, res) => {
  res.render("pages/contact-success");
});

router.get("/contact/error", (req, res) => {
  res.render("pages/contact-error");
});
