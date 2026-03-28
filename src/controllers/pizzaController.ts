
import { findAllPizzas, findPizzaById,insertPizza, modifyPizza, removePizza } from "../services/pizzaService.js";
import type { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/appError.js";


//Renvoyer un texte brut 
export const getPizzas = async (req: Request, res: Response): Promise<void> => { 
  const pizzas = await findAllPizzas()
  res.json(pizzas)
};

//Recuperer une pizza par son id
export const getPizzaById = async (req: Request, res: Response, next: NextFunction) : Promise<void> => {
    try {
    const pizza = await findPizzaById(parseInt(req.params.id as string))
    if (!pizza) {
       return next ( new AppError ("Pizza non trouvée", 404))
    }
    res.json(pizza)

  } catch (error) {
    next(error)
  } 
}

//Créer une pizza
export const  createPizza = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {name, price} = req.body
    if(!name || !price) {
       return next ( new AppError ("Nom et prix requis", 400))
    }
    if (typeof price !== 'number' || price <= 0) {
      return next(new AppError("Le prix doit être un nombre positif", 400))
    }
    const newPizza = await insertPizza(name, price)
    res.status(201).json(newPizza)
  } catch (error) {
    next(error)
  } 
}

// PATH sur une pizza
export const updatePizza = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id as string)
    if (isNaN(id)) {
      return next(new AppError("ID invalide", 400))
    }

    const updated = await modifyPizza(parseInt(req.params.id as string ), req.body)
    if(!updated){
      return next ( new AppError( "Pizza non trouvée", 404 ))
    }
    res.json(updated)
  } catch (error) {
    next(error)
  }
  }


//Supprimer une pizza
export const deletePizza = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id as string )
    if(isNaN(id)){
      return next (new AppError ("ID invalide", 400))
    }
    await removePizza(id) 
    res.status(200).json({ message : "Pizza supprimée"})
  } catch (error) {
    next(error)
  }
}

