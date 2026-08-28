// 1. A class
console.log("=== A class ===")
class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  describe() {
    return `${this.name} — $${this.price}`;
  }

  toString() {
    return this.describe()
  }
}

const rope = new Item("rope", 8)
console.log(rope.describe())
console.log(`${rope}`)
console.log(rope instanceof Item)

console.log("")

// 2. Getters, setters, and a private field
console.log("=== Getters, setters, and a private field ==")

class Account {
  #balance = 0;

  constructor(owner, opening = 0) {
    this.owner = owner;
    this.#balance = opening;
  }

  get balance() { return this.#balance; }

  set balance(value) {
    if (value < 0) throw new RangeError("balance cannot be negative");
    this.#balance = value;
  }

  deposit(amount) {
    this.balance = this.#balance + amount;
    return this;
  }
}

const acct = new Account
console.log(acct.balance)

acct.deposit(5).deposit(10)
console.log(acct.balance)

try {
    acct.balance = -5
} catch (error) {
    console.log(error)
}

console.log("")

// 3. Static
console.log("=== Static ===")

class Money {
  static rate = 0.07;
  static tax(amount) { 
    return +(amount * Money.rate).toFixed(2); 
    }
}

console.log(Money.tax(40))

const instance = new Money
console.log(instance.tax)

console.log("")

// 4. Inheritance
console.log("=== Inheritance ===")

class Weapon extends Item {
    constructor(name, price, damage) {
    super(name, price);
    this.damage = damage;
}

    describe() {
        super.describe()
    }

    damage() {}
}

class Potion extends Item {

    describe() {
        super.describe()
    }

    heals() {}
}

const sword = new Weapon("sword", 10, 4);
const heal = new Potion("heal", 2);
console.log(sword instanceof Weapon)
console.log(sword instanceof Item)

console.log("")

// Polymorphism
console.log("=== Polymorphism ===")

const bag = [rope, sword, heal]

for (const thing of bag) {
    console.log(thing.describe())
}