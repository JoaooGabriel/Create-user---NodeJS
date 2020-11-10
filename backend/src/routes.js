const { Router } = require('express');

const routes = Router();

const LadingController = require('./controllers/LadingController');
const BoletosController = require('./controllers/BoletosController');


routes.post('/', LadingController.create);
routes.get('/', LadingController.index);

routes.post('/boletos', BoletosController.create);
routes.get('/boletos', BoletosController.index);

module.exports = routes;