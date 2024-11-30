const student = {
  name: "Ilia Mchedlishvili",
  age: 26,
  enrolled: true,
  courses: ["Math", "Science", "Art"],

  displayInfo: function () {
    return `Student Name: ${this.name}, Age: ${this.age}, Enrolled: ${this.enrolled ? 'Yes' : 'No'}`;
  },

  addCourse: function (course) {
    this.courses.push(course);
    console.log(`Course "${course}" added.`);
  },

  getTotalCourses: function () {
    return this.courses.length;
  },
};

let totalCourses = student.getTotalCourses();
console.log("Initial Total Courses:", totalCourses);

student.addCourse("Biology");

totalCourses = student.getTotalCourses();
console.log("Updated Total Courses:", totalCourses);

const { name, courses } = student;
console.log("Name:", name);
console.log("Courses:", courses);

const scores = [85, 92, 78, 90];
const [firstScore, secondScore] = scores;
console.log("First Score:", firstScore);
console.log("Second Score:", secondScore);

const clonedStudent = {
  ...student,
  graduationYear: 2026,
};
console.log("Cloned Student with new property:", clonedStudent);

const newCourses = ["History", "Physical Education"];
const combinedCourses = [...student.courses, ...newCourses];
console.log("Combined Courses:", combinedCourses);

const studentJSON = JSON.stringify(student);
console.log("JSON String:", studentJSON);

const newStudent = JSON.parse(studentJSON);

Object.assign(newStudent, {
  getTotalCourses: function () {
    return this.courses.length;
  },
});

console.log("Newly Created Object:", {
  name: newStudent.name,
  age: newStudent.age,
  enrolled: newStudent.enrolled,
  courses: newStudent.courses,
});

console.log("Total courses in newStudent:", newStudent.getTotalCourses());
console.log("Are the objects equal?", JSON.stringify(student) === JSON.stringify(newStudent));
