'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const port = process.env.PORT || 3001



mongoose.connect('mongodb://localhost:27017/shop', (err, res) => {
  if (err) {
    throw err
    return console.log('Error al conectar a la bd');
  } else {
    console.log("Conexión a la db established");
    app.listen(port, () => {
      console.log(`Hello World! API REST corriendo en ${port}`);
    });
  }

})
