module.exports = (req, res) => {
  
  var { s: sidebar = null } = req.query;

  switch (sidebar) {
    case "left":
    case "l":
      res.render("sidebar/left-sidebar", {
        title: "Barra izquierda - MYR Producciones",
        sesion: true,
        register: true
      });
      break;

    case "right":
    case "r":
      res.render("sidebar/right-sidebar", {
        title: "Barra derecha - MYR Producciones",
        sesion: true,
        register: true
      });
      break;

    case "none":
    case "null": case null:
    case "n":
    case "false":
      res.render("sidebar/no-sidebar", {
        title: "Sin barra - MYR Producciones",
        sesion: true,
        register: true
      });
      break;

    default:
      res.render("sidebar/no-sidebar", {
        title: "Sin barra - MYR Producciones",
        sesion: true,
        register: true
      });
      break;
  }
}