import { PrismaClient } from '@prisma/client';

export class AtendimentoRepositorio {
  constructor() {
    this.connection = new PrismaClient();
  }

  async save(servico) {
    await this.connection.cliente.create({ data: { ...servico } });
  }

  async list() {
    const servicos = await this.connection.servico.findMany();
    return servicos;
  }

  async listByPLACA(placa) {
    const servico = await this.connection.servico.findFirst({ where: { placa } });
    return servico;
  }
}
