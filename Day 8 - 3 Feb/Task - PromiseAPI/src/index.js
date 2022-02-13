import "./styles.css";
console.clear();

async function fun() {
  let f = fetch("https://jsonplaceholder.typicode.com/users");
  let def = await f.then((response) => response.json());
  console.log(def);
  def.map((item) => console.log(item["name"]));
}
fun();
