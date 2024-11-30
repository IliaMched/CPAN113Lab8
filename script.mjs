
const student = {
  name: "Ilia Mchedlishvili",
  age: 20,
  enrolled: true,
  courses: ["Math", "Science", "Art"],
  

  displayInfo: function() {
      return `Student Name: ${this.name}, Age: ${this.age}, Enrolled: ${this.enrolled ? 'Yes' : 'No'}`;
  }
};


console.log("Name:", student.name);
console.log("Age:", student.age);


console.log(student.displayInfo());
