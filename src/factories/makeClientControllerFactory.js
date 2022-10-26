import { ClienteController } from '../controllers/ClienteController.js';
import { ClienteRepositorio } from '../repositories/ClienteRepositorio.js';
import { ClienteServices } from '../services/ClienteServices.js';

export function makeClientController() {
  const clienteRepositorio = new ClienteRepositorio();
  const clienteServices = new ClienteServices(clienteRepositorio);
  const clienteController = new ClienteController(clienteServices);

  return clienteController;
}
