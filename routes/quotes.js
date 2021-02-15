const express = require('express');
const quote = require('../models/quote');
const router = express.Router();

router.get('/', function(req, res, next) {
  let allQuotes = quote.fetchAll();

  res.render('quotes', { title: 'Kwotowania USDPLN', table: allQuotes });
});

module.exports = router;
