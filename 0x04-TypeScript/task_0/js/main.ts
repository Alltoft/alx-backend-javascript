interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const Student1: Student = {
    firstName: 'Hamid',
    lastName: 'Bokhncha',
    age: 21,
    location: 'Agafay'
}

const Student2: Student = {
    firstName: 'Jawad',
    lastName: 'Zkrom',
    age: 18,
    location: 'Tindof'
}

const studentsList = [Student1, Student2];

const table = document.createElement('table');
const tbody = document.createElement('tbody');


studentsList.forEach((student) => {
  const row = document.createElement('tr');
  const cellName = document.createElement('td');
  const cellLocation = document.createElement('td');
  cellName.textContent = student.firstName;
  cellLocation.textContent = student.location;
  row.appendChild(cellName);
  row.appendChild(cellLocation);
  tbody.appendChild(row);
});
table.appendChild(tbody);
document.body.appendChild(table);
