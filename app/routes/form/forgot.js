module.exports = (req, res) => {
  
  res.render("form/forgot", {
    title: "Reinicio de contraseña - MYR Producciones",
    sesion: true,
    register: true
  });

}