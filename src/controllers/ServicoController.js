export class ServicoController {
    constructor(servicoAtendimento) {
      this.servicoAtendimento = servicoAtendimento;
    }
  
    async create(request, response) {
      const dadosServico = request.body;
      try {
        await this.servicoAtendimento.create(dadosServico);
        return response.status(201).json(dadosServico);
      } catch (erro) {
        return response.status(500).json({ erro: erro.message });
      }
    }
  
    async getAll(_request, response) {
      try {
        const atendimento = await this.servicoAtendimento.getAll();
        if (!atendimento.length) {
          return response.status(500).json({ erro: 'Nenhum atendimento cadastrado' });
        }
        return response.json(atendimento);
      } catch (erro) {
        return response.status(500).json({ erro: erro.message });
      }
    }
  }
  