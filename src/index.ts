import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import * as dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js'
import userRoutes from './routes/userRoutes.js'
import { errorHandler } from './middlewares/errorHandler.js';

dotenv.config();

// Configuration des chemins fichiers (alternative à __dirname en ES6)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialisation d'Express
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour parser le JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
// Servir des fichiers statiques
// app.use(express.static(path.join(__dirname, 'public')));
app.use('/auth', authRoutes); 

app.use(express.static('public'))


app.use( '/',  userRoutes)

app.use(errorHandler)

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
