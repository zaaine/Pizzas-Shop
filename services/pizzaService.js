import { PrismaClient } from "@prisma/client/extension"


const prisma = new PrismaClient()

export const findAllPizzas = async () => {
  return await prisma.pizzas.findMany()
}

export const  findPizzaById = async (id) => {
  return await prisma.pizzas.findUnique({where : {id}})
}

export const insertPizza = async ( name, price) => {
  return await prisma.pizzas.create({ data : {name, price }})
}

export const modifyPizza = async (id, data) => {
  return await prisma.pizzas.update({ where: { id }, data })
}

export const removePizza = async (id) => {
  return await prisma.pizzas.delete({ where : { id }})
}