let string = "Kayak"
let stringLC = string.toLowerCase()

console.log(stringLC)

console.log(stringLC.split("").reverse().join(""))

function isPalindrome(w) {
  return w === w.split("").reverse().join("")
}

console.log(isPalindrome(stringLC))
