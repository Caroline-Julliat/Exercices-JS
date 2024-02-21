const phrase = `Vous savez, moi je ne crois pas qu’il y ait de bonne ou de mauvaise situation. Moi, si je devais résumer ma vie aujourd’hui avec vous, je dirais que c’est d’abord des rencontres.`
let wordArray = stringToArray(phrase)
let objectArray = []

function stringToArray(string) {
  return string
    .toLowerCase()
    .replace(/[,!\.;?]/g, "")
    .split(" ")
}

for (let word of wordArray) {
  let object = {}
  let nbrOfWord = wordArray.filter((el) => el === word).length
  if (objectArray.find((el) => el.name === word)) {
  } else {
    object.name = word
    object.frequency = nbrOfWord
    objectArray.push(object)
  }
}

objectArray.sort(function (a, b) {
  return b.frequency - a.frequency
})

console.log(objectArray)
