
import { findAllPizzas, findPizzaById,insertPizza, modifyPizza, removePizza } from "../services/pizzaService.js";
import prisma from '../prisma/prisma.js'

//Renvoyer un texte brut 
export const getPizzas = async (req, res) => { 
  const pizzas = await findAllPizzas()
  res.json(pizzas)
};

//Recuperer une pizza par son id
export const getPizzaById = async (req, res) => {
  const pizza = await findPizzaById(parseInt(req.params.id))
  if (!pizza) return res.status(404).json({ message: "Pizza non trouvée" })
  res.json(pizza)
}

//Créer une pizza
export const  createPizza = async (req, res) => {
  const {name, price} = req.body
  const newPizza = await insertPizza(name, price)
  res.status(201).json(newPizza)
}

// PATH sur une pizza
export const updatePizza = async (req, res) => {
  const updated = await modifyPizza(parseInt(req.params.id), req.body)
  if(!updated) return res.status(404).json({message : "Pizza non trouvée"})
  res.json(updated)
  }

//Supprimer une pizza
export const deletePizza = async (req,res) => {
  await removePizza(parseInt(req.params.id)) 
  res.status(200).json({ message : "Pizza supprimée"})
}

