export class ClienteController {
  constructor(servicoCliente) {
    this.servicoCliente = servicoCliente;
  }

  async create(request, response) {
    const dadosCliente = request.body;
    try {
      await this.servicoCliente.create(dadosCliente);
      return response.status(201).json(dadosCliente);
    } catch (erro) {
      return response.status(500).json({ erro: erro.message });
    }
  }

  async getAll(_request, response) {
    try {
      const cliente = await this.servicoCliente.getAll();
      if (!cliente.length) {
        return response.status(500).json({ erro: 'Nenhum cliente cadastrado' });
      }
      return response.json(cliente);
    } catch (erro) {
      return response.status(500).json({ erro: erro.message });
    }
  }
}
