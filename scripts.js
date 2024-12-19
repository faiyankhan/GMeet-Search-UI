const studentsContainer = document.getElementById('students-container');

const  students = [
    "Gaurav Mandal",
    "Vedant Makade",
    "Harsh Totawar",
    "Faiyan Khan",
    "Juned Ansari",
    "Abhishek Mandal",
    "Pranay Pawar",
    "Lavkush Pandit",
    "Gopi Dorkhande",
    "Adarsh Joshi",
    "Neel Shrivastav",
    "Sarvadnya Badwaik"
]

students.forEach((stud)=>{
    studentsContainer.innerHTML += `<div class='student-card'>${stud}</div>`
})