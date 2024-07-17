exports.getContact = (req, res, next) => {
  res.render("contact", {
    path:'/contact-us',
    pageTitle: "contact-us",
    activeShop: true,
    productCSS: true
  });
};
exports.postContact = (req, res) => {
  console.log(req.body);
  res.send("Filled Form SuccessFully");
};
