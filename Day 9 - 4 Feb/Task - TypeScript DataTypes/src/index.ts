import "./styles.css";
console.clear();
let employee: {
  name: string;
} = {
  name: "Mark"
};

console.log(employee);

//Tuple
let data: [string, number];
data = ["skill", 20];

console.log(data);

let data2: [string, number, number?];
data2 = ["str", 23];
console.log("data2: " + data2);
data2 = ["str", 23, 34];
console.log("data2: " + data2);

//Any Type
let anytype: any;
anytype = "Example";
console.log(anytype);

function sum(a: number, b: number) {
  console.log(a + b);
}

sum(5, 5);

//Enum

enum browser {
  Chrome,
  Edge,
  Safari,
  Brave
}
console.log("First Element is", browser[0]);
