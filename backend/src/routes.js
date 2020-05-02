const { Router } = require('express');
const EventController = require('./controllers/EventController');

const routes = Router();

routes.get('/', EventController.index);

routes.post('/', EventController.store);

routes.get('/:id', EventController.show);

routes.put('/:id', EventController.update);

routes.delete('/:id', EventController.destroy);

module.exports = routes;
