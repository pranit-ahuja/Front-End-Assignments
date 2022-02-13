
console.log("hello");
var btnred = document.getElementById("red");
var btngreen = document.getElementById("green");
var btnblue = document.getElementById("blue");
var def = document.getElementById("default");

btnred.addEventListener("click", function () {
  document.body.style.backgroundColor = "red";
  return;
});
btnblue.addEventListener("click", function () {
  document.body.style.backgroundColor = "blue";
  return;
});
btngreen.addEventListener("click", function () {
  document.body.style.backgroundColor = "green";
  return;
});
def.addEventListener("click", function () {
  document.body.style.backgroundColor = "white";
  return;
});
