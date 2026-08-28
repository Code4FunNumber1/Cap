const player = {
  name: "Sam",
  level: 7,
  settings: { theme: "dark", sound: true },
  inventory: [
    { id: 1, item: "sword",  qty: 1 },
    { id: 2, item: "potion", qty: 3 },
    { id: 3, item: "rope",   qty: 2 },
  ],
};

// 1. Two names, one object
console.log("=== Two names, one object ===")

alias = player
alias.level = 6
console.log(player.level)
console.log(alias === player)
player.level = 7

copy = {...player}
console.log(copy===player)

console.log("")

// 2. The question React actually asks
console.log("=== The question React actually asks ===")

function reactWouldRerender(before, after) {
  return before !== after;
}
console.log(reactWouldRerender(player, player))
console.log(reactWouldRerender(player, alias))
console.log(reactWouldRerender(player, copy))

console.log("")

// 3. Change one field, keep the rest
console.log("=== Change one field, keep the rest ===")
const levelledUp = {...player, level: player.level + 1};
console.log(levelledUp)
console.log(player)
console.log(reactWouldRerender(levelledUp, player))

console.log("")

// 4. The shallow-copy trap
console.log("=== The shallow-copy trap ===")

shallow = { ...player }
console.log(shallow.settings === player.settings)

const themed = {
  ...player,
  settings: { ...player.settings, theme: "light" },
};

console.log(player.settings.theme)
console.log(reactWouldRerender(player.settings, themed.settings))
console.log(themed.inventory === player.inventory)

console.log("")

// The three array updates
console.log("=== The three array updates ===")
const added = { 
    ...player, 
    inventory: [
        ...player.inventory, { id: 4, item: "torch", qty: 5 }
    ] 
};

const removed = { 
    ...player, 
    inventory: player.inventory.filter(i => i.id !== 1) 
};

const used = {
  ...player,
  inventory: player.inventory.map(
    i => i.id === 2 
    ? { ...i, qty: i.qty - 1 } 
    : i),
};

console.log(used.inventory[0] === player.inventory[0])   // true  — untouched item reused
console.log(used.inventory[1] !== player.inventory[1])   // true  — changed item replaced

console.log("")

// 6. Prove nothing moved
console.log("=== Prove nothing moved ===")
console.log(player===player)