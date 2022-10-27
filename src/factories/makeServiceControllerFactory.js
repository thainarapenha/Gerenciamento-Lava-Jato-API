import { ServicoController } from '../controllers/ServicoController.js';
import { AtendimentoRepositorio } from '../repositories/AtendimentoRepositorio.js';
import { AtendimentoServices } from '../services/AtendimentoServices.js';

export function makeServiceController() {
  const atendimentoRepositorio = new AtendimentoRepositorio();
  const atendimentoServices = new AtendimentoServices(atendimentoRepositorio);
  const servicoController = new ServicoController(atendimentoServices);

  return servicoController;
}
