const express = require('express');
const quote = require('../models/quote');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('addquote', { title: 'Dodaj kwotowanie USDPLN', message: "" });
});

router.post('/', (req, res, next) => {
    //Nie dodawałem walidacjo, bo nie zdążyłem. Używanie tej technologii to mordęga
    let quoteDate = req.body['quote-date'];
    let quoteValue = req.body['quote-value'];

    let quoteToSave = new quote(quoteDate, quoteValue);
    quoteToSave.save();
    let messageText = `Dodano kwotowanie ${quoteToSave.quoteValue} na datę ${quoteToSave.quoteDate}`;
    res.render('addquote', { title: 'Dodaj kwotowanie USDPLN', message: messageText });
});

module.exports = router;