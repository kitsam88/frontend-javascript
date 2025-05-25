interface Student {
  firstName: string
  lastName: string
  age: number
  location: string
}

const student1: Student = {
  firstName: 'Alice',
  lastName: 'Johnson',
  age: 22,
  location: 'New York',
}

const student2: Student = {
  firstName: 'Bob',
  lastName: 'Smith',
  age: 24,
  location: 'Los Angeles',
}

const studentsList: Student[] = [student1, student2]

// Create table and render to the page
const table = document.createElement('table')
const tbody = document.createElement('tbody')

studentsList.forEach((student) => {
  const row = document.createElement('tr')

  const firstNameCell = document.createElement('td')
  firstNameCell.textContent = student.firstName

  const locationCell = document.createElement('td')
  locationCell.textContent = student.location

  row.appendChild(firstNameCell)
  row.appendChild(locationCell)
  tbody.appendChild(row)
})

table.appendChild(tbody)
document.body.appendChild(table)
