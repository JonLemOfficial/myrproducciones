module.exports = (req, res) => {
  
  res.render("interface", {
    title: "Interfaz gráfica - MYR Producciones",
    sesion: true,
    register: true
  });

}