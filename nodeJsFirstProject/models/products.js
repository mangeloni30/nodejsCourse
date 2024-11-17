const fs = require("fs");
const path = require("path");

const p = path.join(path.dirname(process.mainModule.filename), "data", "products.json");

module.exports = class Product {
  constructor(title) {
    this.title = title
  }

  save() {
    fs.readFile(p, (error, fileContent) => {
      let products = [];
      if (!error) {
        products = JSON.parse(fileContent);
      }
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        // do something if there's an error
        console.log(err);
      });
    });
  }

  static fetchAll(callBackFunc) {
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        callBackFunc([]);
      }
      callBackFunc(JSON.parse(fileContent));
    })
  }
};