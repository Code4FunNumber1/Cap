// Game Data Array
const games = [
  { title: "Hollow Knight",  year: 2017, hours_played: 42, price: 15, finished: true  },
  { title: "Celeste",        year: 2018, hours_played: 12, price: 20, finished: true  },
  { title: "Hades",          year: 2020, hours_played: 60, price: 22, finished: false },
  { title: "Outer Wilds",    year: 2019, hours_played: 22, price: 20, finished: true  },
  { title: "Tunic",          year: 2022, hours_played: 18, price: 30, finished: false },
  { title: "Stardew Valley", year: 2016, hours_played: 95, price: 15, finished: false },
];

// 1. Map functions
console.log("--- Map Functions ---");

const titles = games.map(game => 
  game.title);
console.log(titles);

const gamesAndYear = games.map(game => 
  `${game.title} (${game.year})`);
console.log(gamesAndYear);

const sale = games.map(game => 
  `${game.title} $${game.price * 0.1}`);
console.log(sale);

console.log("\n")

// 2. Filter functions
console.log("--- Filter Functions ---");

const finishedGames = games.filter(game => 
  game.finished);
console.log(finishedGames);

const gamesPlayedMoreThan20Hours = games.filter(game => 
  game.hours_played > 20);
console.log(gamesPlayedMoreThan20Hours);

const recentGamesUnder25Dollars = games.filter(game => 
  game.year >= 2020 && game.price < 25);
console.log(recentGamesUnder25Dollars);

console.log("\n");

// 3. Reduce functions
console.log("--- Reduce Functions ---");

const totalHours = games.reduce((sum, game) => 
  sum + game.hours_played, 0);
console.log(totalHours);

const TotalPrice = games.reduce((sum, game) => 
  sum + game.price, 0);
console.log(TotalPrice);

const LeastPlayedGame = games.reduce((least, game) => 
  (game.hours_played < least.hours_played ? game : least), games[0]);
console.log(LeastPlayedGame);

console.log("\n");

// 4. Find, Some, and Every functions
console.log("--- Find, Some, and Every Functions ---");

const firstUnfinished = games.find(g => 
  !g.finished);
console.log(firstUnfinished);
// Unlike filter, find returns the first element that matches the condition, 
// not an array of all matching elements.

const isAnyExpensive = games.some(g => 
  g.price > 28);
console.log(isAnyExpensive);

const isAllPlayed = games.every(g => 
  g.hours > 10);
console.log(isAllPlayed);

console.log("\n");

// 5. Chaining functions
console.log("--- Chaining Functions ---");

const wastedHours = games
  .filter(g => !g.finished)
  .reduce((sum, game) => sum + game.hours_played, 0);
console.log(wastedHours);

const alphabeticallySortedTitlesOfFinishedGamesBefore2019 = games
  .filter(g => g.finished && g.year < 2019)
  .map(g => g.title)
  .sort();
console.log(alphabeticallySortedTitlesOfFinishedGamesBefore2019);

// Needs fix
// groupBy = groubBy => games.reduce((games, param) => {
//   param = param[param];
//   if (!games[param]) {
//     games[param] = [];
//   }
//   return games;
// });

// console.log(groupBy(games, "finished"));
