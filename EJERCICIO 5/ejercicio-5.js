/*5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los valores que sean mayor que 18*/
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90]

const olderThan18 = ages.filter((age) => age > 18)

console.log(olderThan18)

/*5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los valores que sean par.*/
const edades = [22, 14, 24, 55, 65, 21, 12, 13, 90]

const numerosPares = edades.filter((edad) => edad % 2 === 0)

console.log(numerosPares)

/*5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los streamers que tengan el gameMorePlayed = 'League of Legends'.*/
const streamers = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
]
const streamersLol = streamers.filter(
  (streamer) => streamer.gameMorePlayed === 'League of Legends'
)

console.log(streamersLol)

/*5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos 
usar la funcion .includes() para la comprobación.*/
const jugadores = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
]

const jugadoresConU = jugadores.filter((jugador) => jugador.name.includes('u'))

console.log(jugadoresConU)

/*5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan 
el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion 
.includes() para la comprobación.
Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando 
.age sea mayor que 35.*/

const filteredJugadores = jugadores
  .filter((jugador) => jugador.gameMorePlayed.includes('Legends')) // Filtrar streamers con 'Legends' en gameMorePlayed
  .map((jugador) => {
    // Si la edad es mayor que 35, convertir gameMorePlayed a mayúsculas
    if (jugador.age > 35) {
      return {
        ...jugador,
        gameMorePlayed: jugador.gameMorePlayed.toUpperCase()
      }
    }
    return jugador
  })

console.log(filteredJugadores)
