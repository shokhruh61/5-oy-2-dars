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
// var a = 1;
// function outter() {
//   var b = 2;
//   function inner() {
//     var c = 3;
//     console.log(a);
//     console.log(b);
//     console.log(c);
//   }
//   inner();
// }
// outter();

// console.log(x); // ?
// var x = 5;
// console.log(x); // ?

// console.log(y); // ?
// let y = 10;
// console.log(y); // ?

// {
//   console.log(z); // ?
//   let z = 15;
//   console.log(z); // ?
// }

// // // // Masalalar
// // // Massivlarga oid
// // ### Masala 1:
// function lengthArrayVerify(arg) {
//   let res = arg
//     .filter(function (value) {
//       return value.length >= 5;
//     })
//     .map(function (value) {
//       return value.charAt(0).toUpperCase() + value.slice(1);
//     });
//   return res;
// }
// let arr = ["olma", "behi", "mercedes", "qulupnay", "Ferrari", "Windovs"];
// let res1 = lengthArrayVerify(arr);
// console.log(res1);

// // ### Masala 2:
// function student(arg) {
//   let names = arg.map(function (student) {
//     return student.name;
//   });
//   let res = arg.find(function (student) {
//     return student.age > 20;
//   });
//   return res.name.toUpperCase() + " - " + res.age;
// }
// let arr = [
//   { name: "Sarodr", age: 17 },
//   { name: "Abdulloh", age: 16 },
//   { name: "Murod", age: 29 },
// ];
// console.log(student(arr));

// // // ### Masala 3:
// function pricesSumArray(arg) {
//   let sum = arg.filter(function (value) {
//     return value.price > 10000;
//   });
//   let gen = sum.reduce(function (value, index) {
//     return value + index.price;
//   }, 0);

//   return gen;
// }
// let arr = [
//   { name: "Phone", price: 12000 },
//   { name: "Tablet", price: 80000 },
//   { name: "Laptop", price: 15000 },
//   { name: "Monitor", price: 7000 },
// ];
// console.log(pricesSumArray(arr));

// // ### Masala 4:
// function verifyArray(arg) {
//   if (
//     arg.every(function (value) {
//       return value > 0;
//     })
//   ) {
//     console.log("Barcha sonlar musbat");
//   }
//   if (
//     arg.some(function (value) {
//       return value > 100;
//     })
//   ) {
//     console.log("Katta son bor");
//   }
// }
// let arr = [10, 25, 50, 120];
// verifyArray(arr);

// // ### Masala 5:
// function kv(arg) {
//   arg.forEach(function (value) {
//     console.log(value * value);
//   });
// }
// let arr = [1, 2, 3, 4, 5, 6, 7];
// kv(arr);
// // ### Masala 6:
// function counterArray(arg) {
//   let sum = arg
//     .filter(function (value) {
//       return value.wage >= 2000;
//     })
//     .map(function (value) {
//       return value.wage * 1.1;
//     })
//     .reduce(function (value, index) {
//       return value + index;
//     }, 0);

//   return sum;
// }
// let arr = [
//   { name: "Ali", wage: 1500 },
//   { name: "Vali", wage: 2500 },
//   { name: "Aziz", wage: 3500 },
//   { name: "Shahzod", wage: 1800 },
// ];
// console.log(counterArray(arr));
// // ### Masala 7:
// // Ishlay olmadim buni domladan ishlap berishini soreman.
// // // // Yozuvlarga oid
// // ### Masala 1:
// const toUpperCaseString = (str) => str.toUpperCase();
// let str = "salom dunyo";
// console.log(toUpperCaseString(str));

// // ### Masala 3:
// function switchString(str) {
//   return str.replace("JavaScript", "JS");
// }
// let str = "JavaScript";
// console.log(switchString(str));
// // ### Masala 4:
// function reverseString(str) {
//   return str.split(" ").reverse().join(" ");
// }
// let str = "Salom dunyo";
// console.log(reverseString(str));