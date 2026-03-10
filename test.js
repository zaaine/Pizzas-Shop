import express from 'express';

import path from 'path';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


//config express 
const app = express(); 
const PORT = process.env.PORT || 3000; 


app.use(express.json());

app.use(express.static('public'));

app.use(userRoutes); 

app.listen(PORT, () => {
  console.log(`serveur lancé sur http://localhost:${PORT}`)
});


