const students = [
  {
    name: "John",
    notes: [1, 20, 18, 19, 12],
  },
  {
    name: "Jane",
    notes: [17, 18, 20, 13, 15],
  },
  {
    name: "Sophie",
    notes: [17, 12, 14, 15, 13],
  },
  {
    name: "Marc",
    notes: [2, 3, 5, 8, 9],
  },
  {
    name: "Manon",
    notes: [18, 17, 18, 19, 12],
  },
]

const notes = [18, 17, 18, 19, 12]

function calculateAverage(notes) {
  let sum = 0
  for (let note of notes) {
    sum = sum + note
  }
  let average = sum / notes.length
  return average
}

function compareStudent(a, b) {
  return b.moyenne - a.moyenne
}

for (let student of students) {
  student.moyenne = calculateAverage(student.notes)
  student.noteMin = Math.min(...student.notes)
  student.noteMax = Math.max(...student.notes)
}

function tellAverage(student) {
  return `${student.name} avec une moyenne de ${student.moyenne} - Note min : ${student.noteMin} / Note max : ${student.noteMax}`
}

students.sort(compareStudent)

console.log(students)

console.log(`Top 3 des étudiants :
1: ${tellAverage(students[0])}
2: ${tellAverage(students[1])}
3: ${tellAverage(students[2])}
`)
