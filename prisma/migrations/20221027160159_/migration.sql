/*
  Warnings:

  - You are about to drop the `atendimento` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "atendimento";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "atendimentos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "descricao" TEXT NOT NULL,
    "horaInicio" TEXT NOT NULL,
    "horaFinal" TEXT NOT NULL,
    "clienteCPF" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_tipoServico" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nomeServico" TEXT NOT NULL,
    "valor" REAL NOT NULL,
    "atendimentoID" INTEGER NOT NULL,
    CONSTRAINT "tipoServico_atendimentoID_fkey" FOREIGN KEY ("atendimentoID") REFERENCES "atendimentos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_tipoServico" ("atendimentoID", "id", "nomeServico", "valor") SELECT "atendimentoID", "id", "nomeServico", "valor" FROM "tipoServico";
DROP TABLE "tipoServico";
ALTER TABLE "new_tipoServico" RENAME TO "tipoServico";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
