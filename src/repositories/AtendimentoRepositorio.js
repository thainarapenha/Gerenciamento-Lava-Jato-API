import { PrismaClient } from '@prisma/client';

export class AtendimentoRepositorio {
  constructor() {
    this.connection = new PrismaClient();
  }

  async save(atendimento, tipoServico) {
    console.log(atendimento, tipoServico)

    await this.connection.atendimento.create({
      data: {
        ...atendimento,
        tipoServicos: {
          create: {
            ...tipoServico
          }
        }
      }
    });
  }

  async list() {
    const servicos = await this.connection.atendimento.findMany({ include: {tipoServicos: true} });
    return servicos;
  }
}