const games = [
  { title: "Hollow Knight",  year: 2017, hours_played: 42, price: 15, finished: true  },
  { title: "Celeste",        year: 2018, hours_played: 12, price: 20, finished: true  },
  { title: "Hades",          year: 2020, hours_played: 60, price: 22, finished: false },
  { title: "Outer Wilds",    year: 2019, hours_played: 22, price: 20, finished: true  },
  { title: "Tunic",          year: 2022, hours_played: 18, price: 30, finished: false },
  { title: "Stardew Valley", year: 2016, hours_played: 95, price: 15, finished: false },
];

// 1. Template Literals
console.log(`---Template Literals---`);
const gameTitlesAndYears = games.map(game => 
    `${game.title} (${game.year})`);
console.log(gameTitlesAndYears);

const receipt = (index) => 0 > index || index > games.length - 1
? `
invalid game index
`
:`
--- Game Receipt ---
Title: ${games[index].title}
Price: $${games[index].price}
`;
const logGameReceipts = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(receipt(i));
  }
}
logGameReceipts(games);

console.log(`Total Combined Price: ${games[0].price + games[1].price + games[2].price + games[3].price + games[4].price + games[5].price}`);

console.log("")
// 2. Destructuring
console.log(`---Destructuring---`);
const { title, year } = games[0];
const name = title;
const { publisher = "Unknown" } = games[0];

// const titles = games.map(game => 
//   game.title);
// console.log(titles);

const titles = games.map(({ title }) => 
  title);
console.log(titles);

