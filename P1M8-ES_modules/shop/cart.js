export function total() {
  return items.reduce((sum, i) => sum + i.price, 0);
}