// // regular function

// function sum(a, b) {

//     return a + b;

// }

// // arrow function

// const sum1 =(a, b) =>{
//     return a + b;
// }
// // express function

// const sum2 = function (a, b) {
//     return a + b;
// }

// IIFE

// (function () {
//   var test = "salom";

//   function abs() {
//     console.log(abs);
//   }
// })();

// let user = {
//     name: "John",
//     age: 30,
//     family :{
//         mother: "Jane",
//         father: "John"

//     },
//     isMarried: false
// }

// console.log(user);

// var a = 1;

// function outer() {
//     var b = 2;

//     function inner() {
//         var c = 3;
//         console.log(a); // 1
//         console.log(b); // 2
//         console.log(c); // 3
//     }

//     inner();

/* ________________________________ uyga vazifa ____________________________________ */



// Masalalar Massivlarga oid
// 1-masala
// let arr = ["hello", "world", "mersades", "bmw", "matiz", "lacetti"];
// let result = arr
//   .filter(function (value) {
//     return value.length > 5;
//   })
//   .map(function (value) {
//     return value.charAt(0).toUpperCase() + value.slice(1);
//   });
// console.log(result);
// 2-masala
// function findStudentName(students) {
//   const student = students.find(function(student) {
//       return student.age > 20;
//   });

//   return student ? student.name.toUpperCase() : null;
// }
// const studentArray = [
//   { name: "bobur", age: 19 },
//   { name: "anvar", age: 22 },
//   { name: "jora", age: 23 },
//   { name: "soli", age: 21 }
// ];
// const result = findStudentName(studentArray);
// console.log(result);
// 3-masala
// function totalPrice(value) {
//   return value
//       .filter(value => value > 10000)
//       .reduce((total, value) => total + value, 0);
// }
// const priceAray = [5000, 15000, 12000, 8000, 20000, 7500];
// const total = totalPrice(priceAray);
// console.log(total);
// 4-masala
// function checNumber(arr) {
//   const total = arr.every((num) => num > 0);
//   const hasLargeNumber = arr.some((num) => num > 100);
//   if (total) {
//     console.log("barcha sonlar musbat");
//   } else {
//     console.log("musbat bo'lmagan sonlar bor");
//   }
//   if (hasLargeNumber) {
//     console.log("Katta son bor");
//   }
// }
// const number = [1,-2, 34, 2, 3, 100, 150];
// checNumber(number);
// 5-masala
// function squarElement(arr) {
//     const squaredArray = arr.map(num => num * num);
//     return squaredArray;
// }
// function printArray(arr) {
//     arr.forEach(num => console.log(num));
// }
// const number = [1, 2, 3, 4, 5];
// const squardNumber = squarElement(number);
// printArray(squardNumber);
// 7-masala
// Talabalar ma'lumotlari
// let student = [
//   { name: "aziz", age: 21, score: 75 },
//   { name: "jafar", age: 22, score: 81 },
//   { name: "hayot", age: 20, score: 80 },
//   { name: "rahima", age: 23, score: 90 },
//   { name: "omina", age: 24, score: 79},
// ];
// let firstHighScorer = student.find(function (student) {
//   return student.score >= 80;
// });
// console.log(
//   "birinchi 80 dan yuqori ball olgan talaba:",
//   firstHighScorer.name,
//   firstHighScorer.age
// );
// let highScoringStudents = student
//   .filter(function (student) {
//     return student.score > 80;
//   })
//   .map(function (student) {
//     return student.name.toUpperCase();
//   });
// console.log("80 dan yuqori  olgan talabalar :", highScoringStudents);
// Yozuvlarga oid.
// 1-masala
// function convertUpper(str) {
//   return str.toUpperCase();
// }
// let inptString = "hello,world";
// let  upperCaseStr = convertUpper(inptString);
// console.log(upperCaseStr);
// 2-masala
// function checkSubstr(mainString, substring) {
//   return mainString.includes(substring);
// }
// let mainString = "hello , world!";
// let substr = "world";
// let result = checkSubstr(mainString, substr);

// if (result) {
//   console.log(`"${substr}" substringi bor`);
// } else {
//   console.log(`"${substr}" substringi yoq`);
// }
// 4-masala
// function reverseWord(str) {
//     return str.split(' ').reverse().join(' ');
// }
// let inputStr = "hello world";
// let reverseStr = reverseWord(inputStr);
// console.log(reverseStr);
