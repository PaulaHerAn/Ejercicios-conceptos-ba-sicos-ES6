//EJERCICIO 4 MAP

/*4.1 Dado el siguiente array, devuelve un array con sus nombres 
utilizando .map().*/
const users1 = [
  { id: 1, name: 'Abel' },
  { id: 2, name: 'Julia' },
  { id: 3, name: 'Pedro' },
  { id: 4, name: 'Amanda' }
]

const names = users1.map((user) => user.name)

console.log(names)

/*4.2 Dado el siguiente array, devuelve una lista que contenga los valores 
de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que 
empiece por 'A'.*/
const usuarios = [
  { id: 1, name: 'Abel' },
  { id: 2, name: 'Julia' },
  { id: 3, name: 'Pedro' },
  { id: 4, name: 'Amanda' }
]

const updatedNames = usuarios.map((usuario) => {
  if (user.name[0] === 'A') {
    return 'Anacleto'
  } else {
    return usuarios.name
  }
})

console.log(updatedNames)

/*4.3 Dado el siguiente array, devuelve una lista que contenga los valores 
de la propiedad .name y añade al valor de .name el string ' (Visitado)' 
cuando el valor de la propiedad isVisited = true.*/
const cities = [
  { isVisited: true, name: 'Tokyo' },
  { isVisited: false, name: 'Madagascar' },
  { isVisited: true, name: 'Amsterdam' },
  { isVisited: false, name: 'Seul' }
]

const updatesCityNames = city.map((city) => {
  return city.isVisited ? `${city.name} (Visitado)` : city.name
})

console.log(updatesCityNames)
