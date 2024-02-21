class Rectangle {
  constructor(width, height) {
    this.width = width
    this.height = height
  }

  get perimeter() {
    return (this.width + this.height) * 2
  }

  get isValid() {
    if (this.width * this.height > 0) {
      return true
    } else {
      return false
    }
  }
  //   get isValid () {
  //     return this.width > 0 && this.height > 0
  // }

  isBiggerThan(el) {
    if (this.perimeter > el.perimeter) {
      return true
    } else {
      return false
    }
  }
  // isBiggerThan (shape) {
  //   return this.perimeter > shape.perimeter
  // }
}

class Square extends Rectangle {
  constructor(width) {
    super(width, width)
  }
}

// OBJECTIF => Faire fonctionner ce code :

const r = new Rectangle(10, 20)
console.log(r.perimeter) // 60
console.log(r.isValid) // true
const r2 = new Rectangle(-10, 20)
console.log(r2.isValid) // false
const c = new Square(10)
console.log(c.perimeter) // 40
console.log(r.isBiggerThan(c)) // true
