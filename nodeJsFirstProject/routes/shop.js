const express = require("express");
const path = require("path");
const adminData = require("./admin");

const router = express.Router();

router.get("/",(request, response, next) => {
  console.log("adminData.products ", adminData.products);
  const products = adminData.products;
  // response.send("<h1>Add product</h1>")
//   response.sendFile(path.join(__dirname, "../", "views", "shop.pug"))
  response.render("shop", { products });
  // next(); // Allow the request to continue to the next middleware
});

exports.routes = router;
