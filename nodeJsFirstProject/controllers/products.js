const Product = require("../models/products");

exports.getAddProduct = (request, response, next) => {
  response.render("addProduct", { pageTitle: "Add product" });
};

exports.postAddProduct = (request, response, next) => {
  const product = new Product(request.body.title);
  product.save();
  response.redirect("/");
}

exports.getProducts = (request, response, next) => {
  Product.fetchAll((products) => {
    console.log("getProducts products ", products);
    response.render("shop", { products });
  });
}
