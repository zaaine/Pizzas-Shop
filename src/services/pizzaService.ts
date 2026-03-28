import prisma from '../utils/prisma.js'

export const findAllPizzas = async () => {
  return await prisma.pizza.findMany()
}

export const  findPizzaById = async (id:number) => {
  return await prisma.pizza.findUnique({where : {id}})
}

export const insertPizza = async ( name : string, price : number) => {
  return await prisma.pizza.create({ data : {name, price }})
}

export const modifyPizza = async (id : number, data : object) => {
  return await prisma.pizza.update({ where: { id }, data })
}

export const removePizza = async (id : number) => {
  return await prisma.pizza.delete({ where : { id }})
}


export default prisma;