module.exports = (req, res) => {
  
  res.render("_test/request", {
    title: "Test requests - MYR Producciones",
    obj: req
  });

}