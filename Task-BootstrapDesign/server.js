//Load Environment Variables
require("dotenv").config();

//Load Our Dependencies
const express = require("express"),
    app = express(),
    port = process.env.PORT;

//static Middleware
app.use(express.static(__dirname +"/public"))
//set view engine
app.set('view engine', 'ejs');
//set app routes
app.use(require("./routes/web"));
//Run App Server;
app.listen(port, () => {
    console.log(`Server running on localhost: ${port}`);
})