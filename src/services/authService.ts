import jwt from 'jsonwebtoken'
import * as  bcrypt from 'bcrypt'
import { AppError } from '../utils/appError.js'
import prisma from '../utils/prisma.js'


//Créer un utilisateur
export const registerUser = async (email: string, password: string) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10)
    return await prisma.user.create({
    data: {email, password : hashedPassword}
  })
  } catch (error: any) {
    if (error.code === 'P2002'){
      throw new AppError("Cet email est déjà utilisé", 409) 
    }
     throw new AppError("Erreur lors de l'inscription", 500)
  }
}

//verifier un utilisateur
export const loginUser = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({where : {email}})
  if (!user) return null

const isValid = await bcrypt.compare(password, user.password)
if (!isValid) return null

const JwtSecret = process.env.JWT_SECRET;
if(!JwtSecret){
  throw new AppError ("Configuration manquante", 500);
}

const token = jwt.sign(
  {id : user.id, email: user.email },
  JwtSecret, //clés secrète
  {expiresIn : '24h'}
)
 return token
}

