// routes/userRoutes.js
import express from "express";
import { getPizzaById, createPizza, deletePizza, updatePizza, getPizzas } from "../controllers/pizzaController.js";

import { validatePizza } from "../middlewares/pizzaValidator.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Route de base
router.get('/', (req, res) => {
    res.send('Serveur Node.js fonctionnel !');
});

router.get("/pizzas", getPizzas);
router.get('/pizzas/:id', getPizzaById)
router.patch('/pizzas/:id',protect, validatePizza, updatePizza)
router.post('/pizzas',protect, validatePizza, createPizza)
router.delete ('/pizzas/:id', deletePizza)

export default router;