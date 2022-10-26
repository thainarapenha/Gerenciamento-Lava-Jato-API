import { VerificarCampos } from "../utils/ValidaCliente.js";

export class ClienteServices {
  constructor(clienteRepositorio) {
    this.clienteRepositorio = clienteRepositorio;
  }

  async create(dadosCliente) {
    const { marca, modelo, placa, cor } = dadosCliente.carro;

    try {
      const dadosValidos = VerificarCampos(dadosCliente);

      if(dadosValidos){
        delete dadosCliente.carro;
        await this.clienteRepositorio.save(dadosCliente, { marca, modelo, placa, cor });
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  async getAll() {
    const cliente = await this.clienteRepositorio.list();
    return cliente;
  }
}
