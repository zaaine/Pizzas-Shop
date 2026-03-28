import jwt from 'jsonwebtoken'
import type { NextFunction, Request, Response } from "express";

export const protect = (req: Request, res: Response, next: NextFunction): void => {
  const authHeader = req.headers.authorization

  if (!authHeader || typeof authHeader !== 'string' || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({ message: "Token manquant" })
    return
  }

  const secret = process.env.JWT_SECRET

  if (!secret) {
    res.status(500).json({ message: "Clé JWT non configurée" })
    return
  }

  const token = authHeader.split(' ')[1]

  try {
    const decoded = jwt.verify(token as string , secret)
    req.user = decoded
    next()
  } catch (error) {
    res.status(401).json({ message: "Token invalide" })
    return
  }
}