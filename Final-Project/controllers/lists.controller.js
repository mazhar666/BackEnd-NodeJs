const List = require("../models/list");
function showLists(req, res) {
  List.find()
    .then((lists) => res.render("pages/lists.ejs", { lists }))
    .catch((err) => console.log(err.message));
}

function showList(req, res) {
  const id = req.params.id;
  List.findById(id)
    .then((list) => res.render("pages/show.ejs", { list }))
    .catch((err) => console.log(err.message));
}

function create(req, res) {
  res.render("pages/create.ejs");
}

function store(req, res) {
  const { title, description } = req.body;

  // Check if required fields are empty
  if (!title || !description) {
    // Render an error page or redirect back to the form with an error message
    return res.status(400).render("pages/create.ejs", {
      error: "Please fill in all required fields.",
    });
  }

  // Create new list
  const list = new List({
    title: title,
    price: req.body.price, // You may want to validate the price field as well
    description: description,
  });

  list
    .save()
    .then(() => res.redirect("/lists"))
    .catch((err) => {
      console.log(err.message);
      // Handle other potential errors here and provide appropriate error handling
    });
}

function deleteList(req, res) {
  const id = req.params.id;
  List.findByIdAndDelete(id)
    .then(() => res.redirect("/lists"))
    .catch((err) => console.log(err.message));
}

function edit(req, res) {
  const id = req.params.id;
  List.findById(id)
    .then((list) => res.render("pages/edit.ejs", { list }))
    .catch((err) => console.log(err.message));
}

function update(req, res) {
  const id = req.params.id;
  List.findByIdAndUpdate(id, {
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
  })
    .then(() => res.redirect("/lists"))
    .catch((err) => console.log(err.message));
}

module.exports = {
  showLists,
  showList,
  create,
  store,
  deleteList,
  edit,
  update,
};
