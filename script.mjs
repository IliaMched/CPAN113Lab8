
const student = {
  name: "Ilia Mchedlishvili",
  age: 20,
  enrolled: true,
  courses: ["Math", "Science", "Art"],
  


  displayInfo: function() {
      return `Student Name: ${this.name}, Age: ${this.age}, Enrolled: ${this.enrolled ? 'Yes' : 'No'}`;
  }
};

const { name, courses } = student;
console.log("Name:", name);
console.log("Courses:", courses);

const scores = [85, 92, 78, 90];

const [firstScore, secondScore] = scores;
console.log("First Score:", firstScore);
console.log("Second Score:", secondScore);


const clonedStudent = {
  ...student,
  graduationYear: 2025,
};
console.log("Cloned Student with new property:", clonedStudent);
const newCourses = ["History", "Physical Education"];
const combinedCourses = [...student.courses, ...newCourses];
console.log("Combined Courses:", combinedCourses);




const studentJSON = JSON.stringify(student);
console.log("JSON String:", studentJSON);

const newStudent = JSON.parse(studentJSON);
console.log("Newly Created Object:", newStudent);

console.log("Are the objects equal?", JSON.stringify(student) === JSON.stringify(newStudent));




