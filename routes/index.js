const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('Wylie Gilbert');
});

module.exports = routes; 