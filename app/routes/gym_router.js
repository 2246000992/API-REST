const express = require('express');
const router = express.Router();

router.get('/ejercicios', (req, res) => {
    res.json({
        message: 'Hola mundo'
    });
});

module.exports = router;