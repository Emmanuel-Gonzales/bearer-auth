'use strict';

require('dotenv').config();
const { start } = require('./src/server.js');
const PORT = process.env.PORT

// Start up DB Server
const { db } = require('./src/auth/models/index.js');
db.sync()
  .then(() => {

    // Start the web server
    start(PORT);
  });

