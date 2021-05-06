const Viaje = require('../models/Viajes');

exports.mostrarViajes = async (req, res) => {
    const viajes = await Viaje.findAll();
    res.render('viajes', {
        pagina: 'Proximos Viajes',
        viajes
    });
}

exports.mostrarViaje = async (req, res) => {
    const viaje = await Viaje.findOne({where: {id: req.params.id}});
    res.render('viaje', {
        pagina: 'Viaje',
        viaje
});
}

// //Metodo con promises
// exports.mostrarViajes = (req, res) => {
//     Viaje.findAll().then(viajes => res.render('viajes', {
//             pagina: 'Proximos Viajes',
//             viajes
//         })).catch(error => console.log(error))
// }

// exports.mostrarViaje = (req, res) => {
//     Viaje.findOne({where: {id: req.params.id}}).then(viaje => res.render('viaje', {
//             pagina: 'Viaje',
//             viaje
//     })).catch(error => console.log(error))
// }