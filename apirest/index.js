'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const config = require('./models/config')

mongoose.connect(config.db, (err, res) => {
  if (err) {
    throw err
    return console.log('Error al conectar a la bd');
  } else {
    console.log("Conexión a la db established");
    app.listen(config.port, () => {
      console.log(`Hello World! API REST corriendo en ${config.port}`);
    });
  }

})
