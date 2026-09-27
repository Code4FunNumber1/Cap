export default class Shop {
  constructor(name) { this.name = name; }
  open() { return `${this.name} is open`; }
}