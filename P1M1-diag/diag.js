const x = 10;
if (true) {
    const x = 20;
    console.log(x);   // 20 ?
}

function add(a, b) {
    return a + b;
}
console.log(add(2, 3)); // 5

const addArrow = (a, b) => a + b;
console.log(addArrow(2, 3)); // 5

const nums = [5, 2, 8, 1, 9];
console.log(nums);

nums.push(4);
console.log(nums);

nums.shift();
console.log(nums);

console.log(nums.includes(8));


const student = {
    name: "Jacob",
    grade: 11,
    describe() {
        return `${this.name} is in grade ${this.grade}.`;

    }
}
console.log(student.describe());

const myArray = [1, 2, 3, 4, 5];
for (leti = 0; i < myArray.length; i++) {
    if (myArray[i] % 2 === 0) {
        console.log(myArray[i]);
    }
}

