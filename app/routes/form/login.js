module.exports = (req, res) => {
  
  res.render("form/login", {
    title: "Iniciar sesión - MYR Producciones",
    sesion: false,
    register: true
  });

}