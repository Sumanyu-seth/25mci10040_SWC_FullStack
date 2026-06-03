const students = [
  { name: "Aman", marks: 85 },
  { name: "Priya", marks: 45 },
  { name: "Rohit", marks: 72 },
  { name: "Neha", marks: 91 },
  { name: "Karan", marks: 38 }
];
function fetchStudents() {
    return new Promise((resolve)=> {
        setTimeout(() => {
            resolve(students);
        }, 2000);
    });
};
async function analyzeMarks() {
    const students = await fetchStudents();
    console.log("Student Names:", students);
}
analyzeMarks();
const studentNames = students.map(student => student.name);
const passedStudents = students.filter(student=> student.marks >= 50);
const total = students.reduce((acc, student) => acc + student.marks, 0);
const avg = total / students.length;
console.log("Passed Students:", passedStudents);
console.log("Total Marks:", total);
console.log("Average Marks:", avg);
