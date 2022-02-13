import "./styles.css";
console.clear();

let p = new Promise(function (resolve, reject) {
  if (true) {
    resolve("success");
  } else {
    reject("fail");
  }
});
p.then(function fail(result) {
  console.log(result);
})
  .catch(function promSuccess(result) {
    console.error(result);
  })
  .finally(function () {
    console.log("Final statement");
  });
