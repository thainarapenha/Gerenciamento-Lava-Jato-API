/*
  Warnings:

  - You are about to drop the `servicos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "servicos";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "atendimento" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "descricao" TEXT NOT NULL,
    "horaInicio" TEXT NOT NULL,
    "horaFinal" TEXT NOT NULL,
    "clienteCPF" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "tipoServico" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nomeServico" TEXT NOT NULL,
    "valor" REAL NOT NULL,
    "atendimentoID" INTEGER NOT NULL,
    CONSTRAINT "tipoServico_atendimentoID_fkey" FOREIGN KEY ("atendimentoID") REFERENCES "atendimento" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
