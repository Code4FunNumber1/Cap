import { money } from "./format.js";
import { find } from "./inventory.js";
import Store from "./Shop.js";
import { total } from "./cart.js";

const store = new Store("My Store");
console.log(store.open());
console.log(money(8));
console.log(find(2));
console.log(total());