module.exports = (req, res) => {
  
  res.render("form/register", {
    title: "Registro de usuarios - MYR Producciones",
    sesion: true,
    register: false
  });

}