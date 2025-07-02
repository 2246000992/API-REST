const express = require('express');
const router = express.Router();
const EjerciciosController = require('../controllers/Ejercicios');

router.get('/ejercicios', EjerciciosController.BuscarTodo)

module.exports = router;