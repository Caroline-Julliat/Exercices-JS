class Book {
  constructor(name, nbrPage) {
    this.name = name
    this.nbrPage = nbrPage
    this.page = 1
  }

  nextPage() {
    if (this.page < this.nbrPage) {
      this.page++
    } else {
      this.close()
    }
  }

  close() {
    this.page = 1
  }
}

class Library {
  constructor() {
    this.books = []
  }

  addBook(book) {
    this.books.push(book)
  }
  addBooks(books) {
    for (let book of books) {
      this.addBook(book)
    }
  }
  findBooksByLetter(letter) {
    return this.books.filter(
      (book) => book.name[0].toLowerCase() === letter.toLowerCase()
    )
  }

  findBooksByNbrPage(nbrPage) {
    return this.books.filter((book) => book.nbrPage < nbrPage)
  }
}

// OBJECTIF => Faire fonctionner ce code :

const b = new Book("Seigneur des anneaux", 200)

console.log(b.page)
b.nextPage()
console.log(b.page)
b.close()
console.log(b.page)

const l = new Library()
l.addBook(b)
l.addBooks([
  new Book("Ready player one", 100),
  new Book("Oui-oui", 10),
  new Book("Sillage", 50),
])
console.log(l)
console.log(l.books.filter((book) => book.nbrPage == 10))
console.log(l.findBooksByLetter("S"))
console.log(l.findBooksByNbrPage(100))
