/*
  Warnings:

  - You are about to drop the `Pizzas` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Pizzas";

-- CreateTable
CREATE TABLE "Pizza" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Pizza_pkey" PRIMARY KEY ("id")
);
