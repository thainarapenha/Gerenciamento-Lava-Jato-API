/*
  Warnings:

  - You are about to alter the column `status` on the `clientes` table. The data in that column could be lost. The data in that column will be cast from `String` to `Boolean`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_clientes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "rua" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "numero" INTEGER NOT NULL,
    "cidade" TEXT NOT NULL,
    "uf" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "contato" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL
);
INSERT INTO "new_clientes" ("bairro", "cep", "cidade", "contato", "cpf", "email", "id", "nome", "numero", "rua", "status", "uf") SELECT "bairro", "cep", "cidade", "contato", "cpf", "email", "id", "nome", "numero", "rua", "status", "uf" FROM "clientes";
DROP TABLE "clientes";
ALTER TABLE "new_clientes" RENAME TO "clientes";
CREATE UNIQUE INDEX "clientes_cpf_key" ON "clientes"("cpf");
CREATE UNIQUE INDEX "clientes_email_key" ON "clientes"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
