const express = require("express");
const bodyParser = require("body-parser");
const path = require("path"); // Add this line to import the path module
const adminData = require("./routes/admin")
const shopData = require("./routes/shop")

const app = express();

app.set("view engine", "pug");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use('/admin', adminData.routes);
app.use(shopData.routes);
app.use((req, res, next) => {
  // when the page doesn't exist
  res
    .status(404)
    .send("<h1>Page not found</h1>")
})

// const server = http.createServer(app);

app.listen(3000);
