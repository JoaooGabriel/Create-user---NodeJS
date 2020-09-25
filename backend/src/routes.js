const { Router } = require('express');

const routes = Router();

const LadingController = require('./controllers/LadingController');

routes.post('/', LadingController.create);
routes.get('/', LadingController.index);

module.exports = routes;