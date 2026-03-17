import { registerUser, loginUser } from "../services/authService.js";
import { AppError } from "../utils/appError.js";


//POST/auth/register
export const register = async (req, res, next ) => {
  try{ 
  const {email, password} = req.body
  if(!email || !password) {
    return next ( new AppError ("Email et mot de passe requis", 400)) 
  }
  const user = await registerUser(email,password)
  res.status(201).json({message : "Utilisateur crée", id : user.id, email : user.email}) 
  } catch (error) {
    next(error)

  } 
}


//POST/auth/login
export const login = async (req,res, next ) =>{
  try {
  const {email, password} = req.body
   if(!email || !password) {
    return next (new AppError ("Email et mot de passe requis", 400))
   }
   const token = await loginUser(email, password)
   if(!token) { 
    return next (new AppError ("Email et mot de passe incorrect", 401))
  }
  res.status(200).json({token})  

}
   catch (error) {
    next(error)
  }
 
}
 