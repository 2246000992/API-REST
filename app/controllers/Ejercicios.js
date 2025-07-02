const EjerciciosModel = require('../models/Ejercicios');

function BuscarTodo(req, res){
    EjerciciosModel.find({})
        .then(ejercicios => {
            if (ejercicios.length){
                return res.status(200).send({ejercicios})
            }
            return res.status(204).send({
                message: 'no hay info'
            })
        })
        .catch(err => {
            return res.status(404).send({
                message: `no jala la consulta: ${err}`
            })
        })
}

module.exports = {
    BuscarTodo
}