/*
  Warnings:

  - You are about to drop the `tipoServico` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "tipoServico";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "tipoServicos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nomeServico" TEXT NOT NULL,
    "valor" REAL NOT NULL,
    "atendimentoID" INTEGER NOT NULL,
    CONSTRAINT "tipoServicos_atendimentoID_fkey" FOREIGN KEY ("atendimentoID") REFERENCES "atendimentos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
