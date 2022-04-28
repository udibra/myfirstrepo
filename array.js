// let arr = [15, 32, 45];

// console.log(arr);

// console.log(arr[1]);

// console.log(arr.length);

// let arr = [15, 32, 45];
// let i = 0;
// while (i < arr.length) {
//   console.log(arr[i]);

//   i = i + 1;
// }

// console.log("finish");

// let arr = [15, 32, 45];

// for (let i = 0; i < 10; i++) {
//   console.log(i);
//   if (i == 4) {
//     break;
//   }
// }
// console.log("finish");

// let fruits = ["apple", "banana", "orange"];

// for (let i = 0; i < fruits.length; i++) {
//   if (fruits[i] === "banana") {
//     console.log("We have bananas");
//     break;
//   }

//   console.log(fruits[i]);
// }

let fruits = ["apple", "banana", "orange"];

let person = {
  name: "john",
  age: 40,
  country: "Israel",
};

console.log(person);
console.log(person.age);
console.log(person["name"]);

for (const key in person) {
  console.log(person[key]);
}
