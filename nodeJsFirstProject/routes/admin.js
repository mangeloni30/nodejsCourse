const express = require("express");
const path = require("path");

const router = express.Router();

const products = [];

router.get("/add-product",(request, response, next) => {
  // response.send("<h1>Add product</h1>")
  // response.sendFile(path.join(__dirname, "../", "views", "addProduct.html"))
  response.render("addProduct", { pageTitle: "Add product" });
  // next(); // Allow the request to continue to the next middleware
});

router.post("/add-product",(request, response, next) => {
  products.push({ title: request.body.title })
  response.redirect("/");
});

exports.routes = router;
exports.products = products;
