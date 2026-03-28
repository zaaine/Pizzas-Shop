import type { Request, Response, NextFunction } from "express"

export const validatePizza = (req: Request , res: Response , next: NextFunction) : void  => {
  const {name, price } = req.body

//Verification du nom
if(!name || typeof name !== 'string' || name.trim() === ''){
   res.status(400).json({ message : "Le nom est obligatoire"})
   return
}
//verification du prix
if(!price || typeof price !== 'number' || price <=0){
  res.status(400).json({ message : "Le prix doit être un nombre positif"})
   return
}
// Envoi vers le controller
next()

}