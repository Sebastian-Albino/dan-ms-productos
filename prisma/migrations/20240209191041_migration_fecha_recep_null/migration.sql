/*
  Warnings:

  - Made the column `fechaRecepcion` on table `OrdenProvision` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "OrdenProvision" ALTER COLUMN "fechaRecepcion" SET NOT NULL;
