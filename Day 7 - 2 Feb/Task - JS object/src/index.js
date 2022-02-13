import "./styles.css";
console.clear();
const student = {
  name: "keanu",
  age: 45,
  cgpa: 8.0,
  branch: "CSE"
};
student.name = "Keanu Reaves";
delete student.age;

let k = "";
for (k in student) {
  console.log(student[k]);
}
