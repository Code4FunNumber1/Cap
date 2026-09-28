import dayjs from "dayjs";

const user = { name: "Ada", address: { city: "London" } };
const other = { name: "Grace" };

console.log(user.address?.city);
console.log(other.address?.city);
console.log(other.address?.city?.length);
console.log(other.address?.city?.method?.());

const score = 0;
console.log(score || 100);
console.log(score ?? 100);

const username = "";
console.log(username || "Guest");
console.log(username ?? "Guest");

const city = user?.address?.city ?? "Unknown";
const city2 = other?.address?.city ?? "Unknown";
console.log(city);
console.log(city2);

console.log(dayjs().format("YYYY-MM-DD"));