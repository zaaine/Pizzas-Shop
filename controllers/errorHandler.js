

export const errorHandler = (err, req, res, next) => {

  console.error(err.stack) //Affiche l'erreur dans le terminal

  const status = err.status || 500
  const message = err.message || "Erreur interne du serveur"

  res.status(status).json({
    succes: false,
    message
  })
}