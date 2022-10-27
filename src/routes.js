import { Router } from 'express';
import { makeClientController } from './factories/makeClientControllerFactory.js';
import { makeServiceController } from './factories/makeServiceControllerFactory.js';

const routes = Router();
const clientController = makeClientController();
const servicoController = makeServiceController();

routes.post('/clientes', (request, response) => {
  return clientController.create(request, response);
});
routes.get('/clientes', (request, response) => {
  return clientController.getAll(request, response);
});
routes.post('/servicos', (request, response) => {
  return servicoController.create(request, response);
});
routes.get('/servicos', (request, response) => {
  return servicoController.getAll(request, response);
});

export { routes };