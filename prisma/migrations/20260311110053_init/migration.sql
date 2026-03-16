/*
  Warnings:

  - You are about to drop the `Pizza` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Pizza";

-- CreateTable
CREATE TABLE "Pizzas" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Pizzas_pkey" PRIMARY KEY ("id")
);
