
// Get references to form and result table
const studentForm = document.getElementById('studentForm');
const resultTableBody = document.querySelector('#resultTable tbody');

// Function to load data from localStorage
function loadData() {
    const students = JSON.parse(localStorage.getItem('students')) || [];
    students.forEach(student => appendToTable(student));
}

// Function to append student data to table
function appendToTable(student) {
    const row = document.createElement('tr');

    const totalMarks = student.subject1 + student.subject2 + student.subject3;

    row.innerHTML = `
        <td>${student.rollNumber}</td>
        <td>${student.name}</td>
        <td>${student.class}</td>
        <td>${student.subject1}</td>
        <td>${student.subject2}</td>
        <td>${student.subject3}</td>
        <td>${totalMarks}</td>
    `;

    resultTableBody.appendChild(row);
}

// Function to handle form submission
studentForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const rollNumber = document.getElementById('rollNumber').value;
    const classValue = document.getElementById('class').value;
    const subject1 = parseInt(document.getElementById('subject1').value);
    const subject2 = parseInt(document.getElementById('subject2').value);
    const subject3 = parseInt(document.getElementById('subject3').value);

    const student = { name, rollNumber, class: classValue, subject1, subject2, subject3 };

    // Store in localStorage
    const students = JSON.parse(localStorage.getItem('students')) || [];
    students.push(student);
    localStorage.setItem('students', JSON.stringify(students));

    // Append to table
    appendToTable(student);

    // Clear form fields
    studentForm.reset();
});

// Load existing data when page loads
window.onload = loadData;
