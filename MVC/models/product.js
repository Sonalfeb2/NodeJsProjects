const fs = require("fs");
module.exports = class Products {
  constructor(t) {
    this.title = t;
  }
  save() {
    fs.readFile("product.json", (err, data) => {
      let products = [];
      if (!err) {
        products = JSON.parse(data);
      }
      products.push(this);
      fs.writeFile("product.json", JSON.stringify(products));
    });
  }
  static fetchAll() {
    const data = fs.readFileSync("product.json", (err, data) => {
      if (err) {
        return [];
      }
      return data;
    });
    return JSON.parse(data);
  }
};
