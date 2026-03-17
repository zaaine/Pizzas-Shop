import jwt from 'jsonwebtoken'

export const protect = (req, res, next) => {
  const authHeader = req.headers.autorization

if(!authHeader || !authHeader.startsWith('Bearer')) {
  return res.status(401).json({message: "Token manquant"})
}

const token = authHeader.split('')[1] //récupére le token après Bearer

try {
  const decoded = jwt.verify(token, process.env.JWT_SECRET)
  req.user = decoded
  next() 
}catch(error){
  return res.status(401).json({message:"Token invalide"})
}

}