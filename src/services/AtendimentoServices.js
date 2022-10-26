import { VerificarCampos } from "../utils/ValidaCliente.js";

export class AtendimentoServices {
  constructor(clienteRepositorio) {
    this.clienteRepositorio = clienteRepositorio;
  }

  async create(dadosCliente) {
    try {
      const dadosValidos = VerificarCampos(dadosCliente);

      if(dadosValidos){
        await this.clienteRepositorio.save(dadosCliente);
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  async getAll() {
    const cliente = await this.clienteRepositorio.list();
    return cliente;
  }

  async getByCPF(cpf) {
    const cliente = await this.clienteRepositorio.listByCPF(cpf);
    return cliente;
  }
}
