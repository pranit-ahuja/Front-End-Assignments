import "./styles.css";

var parent = document.getElementById("container");
var parclass = parent.getAttribute("class");
console.log(parclass);
var child = document.getElementById("one");
console.log("child-1 class: " + child.hasAttribute("class"));
child.setAttribute("class", "child-one");
console.log("child-1 class: " + child.getAttribute("class"));
child.removeAttribute("id");
console.log("child-1 id: " + child.hasAttribute("id"));
