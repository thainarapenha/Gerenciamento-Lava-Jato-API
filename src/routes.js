import { Router } from 'express';
import { makeClientController } from './factories/makeClientControllerFactory.js';

const routes = Router();
const clientController = makeClientController();

routes.post('/clientes', (request, response) => {
  return clientController.create(request, response);
});
routes.get('/clientes', (request, response) => {
  return clientController.getAll(request, response);
});

export { routes };
