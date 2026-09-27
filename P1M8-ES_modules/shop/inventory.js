export const items = [
  { id: 1, name: "rope",  price: 8 },
  { id: 2, name: "torch", price: 3 },
];

export function find(id) {
  return items.find((i) => i.id === id);
}