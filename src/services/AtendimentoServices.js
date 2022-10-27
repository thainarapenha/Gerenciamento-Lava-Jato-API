import { VerificarCamposServico } from "../utils/ValidaServico.js";

export class AtendimentoServices {
  constructor(atendimentoRepositorio) {
    this.atendimentoRepositorio = atendimentoRepositorio;
  }

  async create(dadosAtendimento) {
    const { nomeServico, valor } = dadosAtendimento.tipoServicos;

    try {
      const dadosValidos = VerificarCamposServico(dadosAtendimento);

      if(dadosValidos){
        delete dadosAtendimento.tipoServicos;
        await this.atendimentoRepositorio.save(dadosAtendimento, { nomeServico, valor });
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  async getAll() {
    const servico = await this.atendimentoRepositorio.list();
    return servico;
  }
}