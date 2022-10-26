import { PrismaClient } from '@prisma/client';

export class ClienteRepositorio {
  constructor() {
    this.connection = new PrismaClient();
  }

  async save(cliente, carro) {
    console.log(cliente, carro)
    await this.connection.cliente.create({
      data: {
        ...cliente,
        carros: {
          create: {
            ...carro
          }
        }
      }
    });
  }

  async list() {
    const clientes = await this.connection.cliente.findMany({ include: {carros:true} });
    return clientes;
  }
}
