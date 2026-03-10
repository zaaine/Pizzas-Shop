
import { findAllPizzas, findPizzaById,insertPizza, modifyPizza, removePizza } from "../services/pizzaService.js";

//Renvoyer un texte brut 
export const getPizza = (req, res) => { 
  const pizzas = findAllPizzas()
  res.json(pizzas)
};

//Recuperer une pizza par son id
export const getPizzaById = (req, res) => {
  const pizza = findPizzaById(parseInt(req.params.id))
  if (!pizza) return res.status(404).json({ message: "Pizza non trouvée" })
  res.json(pizza)
}

//Créer une pizza
export const  createPizza = (req, res) => {
  const {name, price} = req.body
  const newPizza = insertPizza(name, price)
  res.status(201).json(newPizza)
}

// PATH sur une pizza
export const updatePizza = (req, res) => {
  const updated = modifyPizza(parseInt(req.params.id), req.body)
  if(!updated) return res.statut(404).json({message : "Pizza non trouvé"})
  res.json(updated)
  }

//Supprimer une pizza
export const deletePizza = (req,res) => {
  const deleted  = removePizza(parseInt(req.params.id)) 
  if ( !deleted) return res.status(404).json({ message : 'Pizza non trouvé'})
  res.status(200).json({ message : "Pizza supprimée"})
}

