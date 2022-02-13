import "./styles.css";
console.clear();
let num = false;
let newp = new Promise(function (resolve, reject) {
  if (num) {
    setTimeout(function () {
      resolve("Fulfilled");
    }, 4000);
  } else {
    setTimeout(function () {
      reject("Rejected");
    }, 4000);
  }
});

async function func() {
  try {
    let result = await newp;
    console.log(result);
  } catch {
    console.log("Error");
  }
}
func();
