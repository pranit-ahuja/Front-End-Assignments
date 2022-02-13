let btn = document.getElementById("a");
btn.addEventListener("click", () =>
  document.getElementById("share").classList.toggle("show-two")
);

document.getElementsByTagName("body")[0].addEventListener("click", function () {
  if (document.getElementById("share").getAttribute("class") === "show-two") {
    document.getElementById("share").setAttribute("class", "show");
  }
});
console.log(document.getElementById("share").getAttribute("class"));
