"use strict";

const express = require('express');
const path = require("path");
const router = require("./router")

// default constants
const ROOT_DIR = path.join(__dirname, "..", "public");
const TEMPLATES_DIR = path.join(__dirname, "views");

const app = express();

function main(argv) {

  argv = argv.slice(2);

  app
    // listening port
    .set('port', (process.env.PORT || process.argv[2] || 8000))

    // views directory
    .set("views", TEMPLATES_DIR)

    // template engine
    .set("view engine", "ejs")
    
    // static files
    .use(express.static(ROOT_DIR))

    // web routes
    .use(router)

    // enable port and run server
    .listen(app.get("port"), () => {
      console.log(`Server running at: "http://localhost:${app.get("port")}"`)
    });
}

main(process.argv);