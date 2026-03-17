import 'dotenv/config'
import prisma from '../prisma/prisma.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


//Créer un utilisateur
export const registerUser = async (email, password) => {
  const hashedPassword = await bcrypt.hash(password, 10)
  return await prisma.user.create({
    data: {email, password : hashedPassword}
  })
}

//verifier un utilisateur
export const loginUser = async (email, password) => {
  const user = await prisma.user.findUnique({where : {email}})
  if (!user) return null

const isValid = await bcrypt.compare(password, user.password)
if (!isValid) return null

const token = jwt.sign(
  {id : user.id, email: user.email },
  process.env.JWT_SECRET, //clés secrète
  {expiresIn : '24h'}
)
 return token
}

