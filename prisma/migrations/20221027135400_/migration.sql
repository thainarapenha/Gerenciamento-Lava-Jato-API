-- CreateTable
CREATE TABLE "servicos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tipoServico" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "valor" REAL NOT NULL,
    "clienteID" INTEGER NOT NULL,
    CONSTRAINT "servicos_clienteID_fkey" FOREIGN KEY ("clienteID") REFERENCES "clientes" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
