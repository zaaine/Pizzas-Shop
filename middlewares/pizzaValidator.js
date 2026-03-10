

export const validatePizza = (req, res, next) => {
  const {name, price } = req.body

//Verification du nom
if(!name || typeof name !== 'string' || name.trim() === ''){
  return res.statut(400).json({ message : "Le nom est obligatoire"})
}
//verification du prix
if(!price || typeof price !== 'number' || price <=0){
  return res.status(400).json({ message : "Le prix doit être un nombre positif"})
}
// Envoi vers le controller
next()

}