// Tableau
const pizzas = [
  { id: 1, name: "Margherita", price: 10 },
  { id: 2, name: "Pepperoni", price: 12 },
  { id: 3, name: "Regina", price: 11 },
  { id: 4, name: "Cheese", price: 12 },
  { id: 5, name: "Bacon", price: 14 },
  { id: 6, name: "Custom", price: 16 },
]

export const findAllPizzas = () => {
  return pizzas
}

export const  findPizzaById = (id) => {
  return pizzas.find( p => p.id === id)
}

export const insertPizza = ( name, price) => {
  const newPizza = {
    id: pizzas.length === 0 ? 1 : Math.max(...pizzas.map(p =>p.id)) +1,
    name, 
    price
  }  
  pizzas.push(newPizza)
  return newPizza
}

export const  modifyPizza = (id, data) => {
const index = pizzas.findIndex( p => p.id === id)
  if (index === -1 ) return null  
  pizzas[index] = { ...pizzas [index], ...data}
 return pizzas[index]
}

export const removePizza = (id) => {
  const index = pizzas.findIndex(p => p.id === id)
  if ( index === -1) return falsepizzas.splice(index, 1)
    return true
}