import type { NextFunction, Request, Response } from "express"
import type { AppError } from "../utils/appError.js"


export const errorHandler = (err : AppError, req : Request, res : Response, next : NextFunction) : void => {

  console.error(err.stack) 

  const status = err.status || 500
  const message = err.message || "Erreur interne du serveur"

  res.status(status).json({
    success: false,
    message
  })
}