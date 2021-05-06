const Sequelize = require('sequelize');
const db = require('../config/database');

//testimoniales es el nombre del modelo
const Testimonial = db.define('testimoniales', {
    nombre: {
        type: Sequelize.STRING
    },
    correo: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.STRING
    },
});

module.exports = Testimonial;