const express = require('express');
const quote = require('../models/quote');
const router = express.Router();

router.get('/', function(req, res, next) {
    let allQuotes = quote.fetchAll();


    res.render('attributes', { title: 'Atrybuty klasy Quote', object: allQuotes[0] });
});

module.exports = router;