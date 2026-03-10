import express from 'express';
import userRoutes from './routes/userRoutes.js'
import path from 'path';
import { fileURLToPath } from 'url';

// Configuration des chemins fichiers (alternative à __dirname en ES6)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialisation d'Express
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour parser le JSON
app.use(express.json());

// Servir des fichiers statiques
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'))

app.use(userRoutes);

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
