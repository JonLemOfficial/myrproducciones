"use strict";

const 
  { Router } = require("express"),
  routes = require('./routes');

var router = Router();

router
  // paths
  .get("/", routes.home)
  .get("/sidebar", routes.sidebar)
  .get("/interface", routes.interface)
  .get("/login", routes.form.login)
  .get("/register", routes.form.register)
  .get("/forgot", routes.form.forgot)
  // .get("/about", routes.info.about)
  // .get("/terms", routes.info.terms)
  // .get("/policy", routes.info.policy)
  // .get("/support", routes.info.support)
  .get("/request", routes._test.request)

  // set 404 error pages for undefined routes  
  .get("*", routes.error['404']);

module.exports = router;