// fetch('/pizza')
//   .then(res => res.text())        
//   .then(data => {
//     document.getElementById('pizza').innerHTML = `<p>${data}</p>`
//   })



//Affichage des pizzas
  const loadPizzas = async () => {
  const res = await fetch('/pizzas')
  const pizzas = await res.json()

  const container = document.getElementById('pizzas-list')
  container.innerHTML = pizzas.map(pizza => `
    <div class="pizza-card" onclick="loadPizzaById(${pizza.id})">
      <h3>${pizza.name}</h3>
      <p class="pizza-price">${pizza.price} €</p>
       <button onclick="event.stopPropagation(); deletePizza(${pizza.id})">🗑️ Supprimer</button>
       <button> ✏️ </button>
    </div>
  `).join('')
}

// 2. Charger une pizza par son id au clic
const loadPizzaById = async (id) => {
  const res = await fetch(`/pizzas/${id}`)
  const pizza = await res.json()

  const detail = document.getElementById('pizza-detail')
  detail.innerHTML = `
    <div class="pizza-detail">
      <h3>🍕 ${pizza.name}</h3>
      <p class="pizza-price">Prix : ${pizza.price} €</p>
      <p>ID : ${pizza.id}</p>

      <div class="edit-form">
        <h4>Modifier la pizza</h4>
        <input type="text" id="edit-name" placeholder="Nouveau nom" value="${pizza.name}" />
        <input type="number" id="edit-price" placeholder="Nouveau prix" value="${pizza.price}" />
        <button onclick="event.stopPropagation();updatePizza(${pizza.id})">✏️ Modifier</button>
      </div>
    </div>
          
  `
}
//Créer une pizza
const createPizza = async () => {
  const name = document.getElementById('input-name').value
  const price = document.getElementById('input-price').value

  if(!name || !price ) return alert ('Remplis les 2 champs !')

  const res = await fetch ('/pizzas', {
    method: 'POST',
    headers: { 'Content-Type' : 'application/json'},
    body: JSON.stringify({name, price : parseInt(price)})
  })  

  const newPizza = await res.json()
  console.log('Pizza créée : ', newPizza)


  //nettoyage formulaire
  document.getElementById('input-name').value = ' '
  document.getElementById('input-price').value = ' '
  loadPizzas()
}


// supprimer une pizza
const deletePizza = async (id) => {
  const res = await fetch (`/pizzas/${id}`,{
    method: "DELETE"
  
  })
   const data = await res.json()
 
  console.log(data.message)

  document.getElementById('pizza-detail').innerHTML = ''
  loadPizzas()

}


// Update une pizza

const updatePizza = async (id) => {
  const name = document.getElementById('edit-name').value
  const price = document.getElementById('edit-price').value

  const res = await fetch(`/pizzas/${id}`, {
    method: 'PATCH',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify({name, price : parseInt(price)})
  })

  const updatedPizza = await res.json()
  console.log('Pizza modifiée :', updatedPizza)

  loadPizzas()
  // loadPizzaById(id)
  document.getElementById('pizza-detail').innerHTML = ''
}

loadPizzas()