const mongoose = require('mongoose')
const EjerciciosEsquema = mongoose.Schema({
    nombre: { type: String, required: true },
    tipo: { type: String, required: true },
    duracion: { type: Number, required: true },
    calorias: { type: Number, required: true }
})

const Ejercicios = mongoose.model('ejercicios', EjerciciosEsquema)

module.exports = Ejercicios