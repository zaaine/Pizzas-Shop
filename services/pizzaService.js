import 'dotenv/config'
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '@prisma/client'

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
const prisma = new PrismaClient({ adapter })

export const findAllPizzas = async () => {
  return await prisma.pizza.findMany()
}

export const  findPizzaById = async (id) => {
  return await prisma.pizza.findUnique({where : {id}})
}

export const insertPizza = async ( name, price) => {
  return await prisma.pizza.create({ data : {name, price }})
}

export const modifyPizza = async (id, data) => {
  return await prisma.pizza.update({ where: { id }, data })
}

export const removePizza = async (id) => {
  return await prisma.pizza.delete({ where : { id }})
}


export default prisma;