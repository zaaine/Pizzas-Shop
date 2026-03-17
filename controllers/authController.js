import { registerUser, loginUser } from "../services/authService.js";


//POST/auth/register
export const register = async (req, res) => {

   console.log('=== req.body ===', req.body)           // ← ajoute
  console.log('=== headers ===', req.headers) 
  const {email, password} = req.body

  if(!email || !password) return res.status(400).json({message : "Email et mot de passe incorrect"})

  const user = await registerUser(email,password)
  res.status(201).json({massage : "Utilisateur crée", id : user.id, email : user.email})  
}


//POST/auth/login

export const login = async (req,res) =>{
  const {email, password} = req.body

  if(!email || !password) return res.status(400).json({message : "Email et mot de passe incorrect"})

  const token = await loginUser(email, password)
  
  if(!token) return res.status(401).json({message: "Email et mot de passe incorrect"})
  
  res.status(200).json({token})  
}