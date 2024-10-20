/*Crea una función llamada rollDice() que reciba como parametro el numero de caras que queramos que tenga el dado que deberá simular el codigo dentro de la función. 
Como hemos dicho, que la función use el parametro para simular una tirada de dado y retornar el resultado. Si no se te ocurre como hacer un numero aleatorio no te preocupes! Busca información sobre la función de javascript Math.random()*/

function rollDice(sides) {
  if (sides <= 0) {
    return 'El dado debe tener al menos 1 cara.'
  }
  const result = Math.floor(Math.random() * sides) + 1
  return result
}

console.log(rollDice(6))
console.log(rollDice(20))
console.log(rollDice(10))
console.log(rollDice(0))
console.log(rollDice(-3))
