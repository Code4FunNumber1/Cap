// console.log("first");
// setTimeout(() => console.log("second"), 0);
// console.log("third");

function wait(ms, value) {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

// wait(500, "done")
//   .then((v) => console.log(v))
//   .then(() => console.log("and then this"));

// console.log(wait(500, "x"));

async function run() {
  const v = await wait(500, "done");
  console.log(v);
  console.log("and then this");
}
run();

// async function run() {
//   const v = wait(500, "done");
//   console.log(v);
//   console.log("and then this");
// }
// run();

// function run() {
//   const v = await wait(500, "done");
//   console.log(v);
//   console.log("and then this");
// }
// run();

async function getPokemon(name) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
//   console.log(res);
  const data = await res.json();
  return data;
}

const Chary = await getPokemon("charizard");
console.log(Chary.name, Chary.weight);
console.log(`${Chary.name.charAt(0).toUpperCase() + Chary.name.slice(1)}:
    Index: ${Chary.id}, 
    Weight: ${Chary.weight}, 
    Height: ${Chary.height}, 
    Types: ${Chary.types.map((t) => t.type.name).join(", ")}`
);
