const games = [
  { title: "Hollow Knight",  year: 2017, hours: 42, price: 15, finished: true  },
  { title: "Celeste",        year: 2018, hours: 12, price: 20, finished: true  },
  { title: "Hades",          year: 2020, hours: 60, price: 22, finished: false },
  { title: "Outer Wilds",    year: 2019, hours: 22, price: 20, finished: true  },
  { title: "Tunic",          year: 2022, hours: 18, price: 30, finished: false },
  { title: "Stardew Valley", year: 2016, hours: 95, price: 15, finished: false },
];

const titles = games.map(game => game.title);

const gamesAndYear = games.map(game => `${game.title} (${game.year})`);

const sale = games.map(game => `${game.title} $${game.price * 0.1}`);

console.log(games);

const finishedGames = games.filter(game => game.finished);
console.log(finishedGames);