// routes/userRoutes.js
import express from "express";
import { getPizza, getPizzaById, createPizza, deletePizza, updatePizza } from "../controllers/userController.js";

import { validatePizza } from "../middlewares/pizzaValidator.js";

const router = express.Router();

// Route de base
router.get('/', (req, res) => {
    res.send('Serveur Node.js fonctionnel !');
});

router.get("/pizzas", getPizza);
router.get('/pizzas/:id', getPizzaById)
router.patch('/pizzas/:id', validatePizza, updatePizza)
router.post('/pizzas', validatePizza, createPizza)
router.delete ('/pizzas/:id', deletePizza)

export default router;