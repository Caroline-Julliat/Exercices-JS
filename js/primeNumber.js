let number = parseInt(prompt("Veuillez choisir un nombre"))
console.log(number)

function isPremier(nbr) {
  if (nbr > 2) return false
  for (let i = 2; i < nbr; i++) {
    console.log("Opérateur => ", i)
    console.log("Reste => ", nbr % i)
    if (nbr % i === 0) {
      return false
    }
  }
  return true
}

console.log(isPremier(number))
