"use strict";

const express = require('express');
const path = require("path");

// default constants
const ROOT_DIR = path.join(__dirname, "..", "public");

const app = express();

function main(argv) {

  app
    // enable main public directory for user requests
    .use(express.static(ROOT_DIR))
    
    // main port which app will be listening
    .set('port', (process.env.PORT || process.argv[2] || 8000))

    // paths
    .get("/", function (req, res) {
      res.sendFile(path.join(ROOT_DIR, "index.html"));
    })

    // set 404 error pages for undefined routes  
    .get("*", function(req, res) {
      res
        .status(404)
        .sendFile(path.join(ROOT_DIR, "404.html"));
    })

    // enable port and init the server
    .listen(app.get("port"), () => {
      console.log(`Server running at: "http://localhost:${ app.get("port") }"`)
    });
}

main(process.argv);