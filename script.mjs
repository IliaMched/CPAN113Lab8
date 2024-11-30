
const student = {
  name: "Ilia Mchedlishvili",
  age: 20,
  enrolled: true,
  courses: ["Math", "Science", "Art"],
  

  displayInfo: function() {
      return `Student Name: ${this.name}, Age: ${this.age}, Enrolled: ${this.enrolled ? 'Yes' : 'No'}`;
  }
};

 
const studentJSON = JSON.stringify(student);
console.log("JSON String:", studentJSON);

const newStudent = JSON.parse(studentJSON);
console.log("Newly Created Object:", newStudent);

console.log("Are the objects equal?", JSON.stringify(student) === JSON.stringify(newStudent));




