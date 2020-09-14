module.exports = (req, res) => {
  res
    .status(404)
    .render("error/404", {});
}