const express = require("express");
const bodyParser = require("body-parser");
const path = require("path"); // Add this line to import the path module
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const errorsRoute = require("./controllers/errors");

const app = express();

app.set("view engine", "pug");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(errorsRoute.getPageNotFound)

app.listen(3000);
