// Question - What is prototypes in javascript?
// Ans. javascript prototypes is a fundamental concept that enables inheritance is an prototype is a bluprint or a parent object to another object can inherit properties or methods.

// Question - What is Memoization?
// Ans. memoization is the optimized technique is used in programing to speed up execution of a function calculations.
// Memoization in Javascript: In JavaScript, the concept of memorization is based mostly on two ideas. They are as follows:

// Closures
// Higher-Order Functions


// 𝗡𝗼𝗱𝗲𝗝𝗦 𝗮𝗻𝗱 𝗕𝗮𝗰𝗸𝗲𝗻𝗱 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗺𝗲𝗻𝘁
 // - What is event-driven architecture in NodeJS?
 // - How does NodeJS handle asynchronous operations?
 // - What are middleware functions in ExpressJS?
 // - How does authentication work in NodeJS? Explain JWT vs. OAuth.
 // - What are WebSockets, and when would you use them?
 // - What is the difference between monolithic and microservices architectures?
 // - How does NodeJS handle memory management?

// 𝗗𝗮𝘁𝗮𝗯𝗮𝘀𝗲𝘀 𝗮𝗻𝗱 𝗦𝘆𝘀𝘁𝗲𝗺 𝗗𝗲𝘀𝗶𝗴𝗻
 // - What is the difference between SQL and NoSQL databases?
 // - How does indexing work in databases?
 // - What are ACID properties in a database?
 // - How would you scale an API to handle millions of requests per second?
 // - Design elevator system
 // - Design a parking lot
 // - What is caching, and how does it improve performance?
 // - Design a rate limiter
 // - Design a logging system
 // - Design a pastebin/ code sharing app

// Question - What is Event bubling?
// Ans. Event bubbling is a mechanism in JavaScript where an event triggered on a child element propagates upward through its parent elements in the DOM hierarchy. 

// Question - What is function curring?
// sequence of a functions
// function add(a) {
//     return function(b) {
//         return a + b;
//     }
// }

// const addTwo = add(5);  // First function call with 5
// console.log(addTwo(4));

// Question - What is pure and impure function?
//Ans. = pure function is the that function its output will be same if we call multiple time, and impure is work differently give the output different.
// function pure(a, b) {
//   console.log(a + b);
// }
// pure(20, 10);
// let total = 0;
// function impure(val) {
//   total += val;
//   return total;
// }
// console.log(impure(10));
// console.log(impure(10));

// Question - What is the shallo and deep copy?
//Ans. = A shallow copy creates a new object or array, A deep copy creates a completely independent copy
// shallow copy
// let obj = {
//   name: "kamal",
//   details: { city: "rampur", age: 26 },
// };
// let shallowCopy = { ...obj };
// shallowCopy.details.age = 40;
// shallowCopy.details.city = "shyampur";
// let deepCopy = JSON.parse(JSON.stringify(obj));
// deepCopy.details.city = "shyampur";

// console.log(obj.details.city);
// // console.log(shallowCopy)
// console.log(deepCopy.details.city);

// Question - What is the closure?
// Ans. = A closure is the combination of a function bundled together with references to its surrounding state and gives a function access to its outer scope.
// function mainFunc() {
//   let name = "kamal";
//   function innerFunc() {
//     console.log(name);
//   }
//   innerFunc();
// }
// mainFunc();

// Question - What is the API?
// Ans. = API as a menu or a set of rules and instructions that allows different software applications to communicate and interact with each other.

// Question - What is the connection in react?
// Ans. = connection is react its way connect react to backend.

// Question - What is the MVC in react?
// Ans. = MVC stands for Model-View-Controller, a classic architectural pattern that separates an application into three interconnected components.

// Question - What is the event in react?
// Ans. = In React, an event is an action that happens in the system or an interaction from the user that your application can respond to.

// Question - What is the Git?
// Ans. = Git is a free and open-source distributed version control system and  powerful tool that helps individuals and teams track changes to files over time, coordinate work, and collaborate on software development projects.

// Question - What is the Authentication?
// Ans. = Authentication is the process of verifying the identity of a user, system, or entity trying to access a resource or system.

// Question - What is polyfill?
// Ans. = Polyfill is the peice of code its checked browser is old version and new something like.

// ➡️ What is Reconciliation and Diffing Algorithm.
// Ans. = Reconciliation is React's process of comparing the current (new) Virtual DOM tree with the previous Virtual DOM tree and then determining the most efficient way to update the Real DOM. When you update a component's state or props, React doesn't immediately touch the browser's DOM. Instead, it initiates this reconciliation process.
// The diffing algorithm is the set of heuristics (rules of thumb) that React uses to quickly compare two Virtual DOM trees and find the differences. It's designed to be fast, often achieving O(n) time complexity (linear time), where 'n' is the number of elements in the tree. This is significantly faster than a naive O(n^3) comparison, which would be too slow for practical applications.

// Question - What is limitations (disadvantage) of react.js?
// Ans. =
// Question - What is useMemo and useCallback?
// Ans. = They are primarily used for performance optimization by helping you memoize values and functions, respectively, to prevent unnecessary re-renders of components.

// Question - What is difference between event bubling and event capturing.
// Question - How to optimized react application.

// Question - What is Polyfil.
// Ans. = In web development, a polyfill is a piece of code (most commonly JavaScript) that provides modern functionality to older web browsers or environments that do not natively support that functionality

// Question - What is First Class function.
// Ans. = A programming language is said to have First-class functions when functions in that language are treated like any other variable. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.

// Question - What is function currying.
// Ans. = "Currying" is a functional programming technique that transforms a function that takes multiple arguments into a sequence of functions, each taking a single argument.

// Question - What is callback function and rest parameters?
// function isCallbackFn(callbackFn, ...a) {
//   console.log(a);
//   callbackFn();
// }
// function callbackFn() {
//   console.log("Hello callback function");
// }
// isCallbackFn(callbackFn, "myFunc", "is", "not", "callback", "function");

//// ====== 🚀 NEXT 🚀 =======

// let a = 10;
// let b = a++ + ++a; // 10 + 12 =
// console.log(b);

// function abc() {
//   console.log(abc.xyz);
// }
// abc();
// abc.xyz = 400;
// abc.xyz = 200;
// abc();
// console.log(abc())
// == what is  output

// ====== 🚀 NEXT 🚀 =======

// const num = [1,2,3,4];
// num[100] = 500;
// console.log(num);

// ====== 🚀 NEXT 🚀 =======

// console.log(typeof typeof 100);

// ====== 🚀 NEXT 🚀 =======

// const arr = [... 'kamal'];
// console.log(arr)

// ====== 🚀 NEXT 🚀 =======

// console.log(parseInt('10+2'));
// console.log(parseInt('7FM'));
// console.log(parseInt('F9M'));
// console.log(typeof parseInt())

// ====== 🚀 NEXT 🚀 =======

// console.log([1,2,3,].map((num) => {
//     if(num>0) return;
//     return num * 2;
// }))

// ====== 🚀 NEXT 🚀 =======

// {
//     function abc() {
//         console.log('kamal')
//     }
// }
// abc()

// ====== 🚀 NEXT 🚀 =======

// function abc(a, b) {
//   "use strict";
//   a = 100;
//   b = 200;
//   return arguments[0] + arguments[1];
// console.log(a+b)
// }
// console.log(abc(50,30));

// ====== 🚀 NEXT 🚀 =======

// const arr = [1,2,3,4,5,6,6,7,7,8,9];
// const res = arr.map((num) => num > 5)
// const res = arr.filter((num) => num != 4)
// console.log(res) // there is the used comparision operators
// arr.splice(2,5)
// arr.slice(2,4)
// console.log(arr)

// ====== 🚀 NEXT 🚀 =======

// function test() {
//     // salary = 50000
//     // console.log(salary)
//     console.log(test.abc)
// }
// test()
// test.abc = 500
// test.abc = 1000
// test()

// console.log({} == {}); => we not compare because object has refenece not a values
// console.log({} === {});

// ====== 🚀 NEXT 🚀 =======

// let a = {
//     name: "kamal"
// }
// let b = {
//     ...a
// }
// b.name = "sharma"
// console.log(a.name)

// let a = 10;
// let b = new Number(10);
// let c = 10;

// console.log(a === b);
// console.log(b === c);

// ====== 🚀 NEXT 🚀 =======

// function test(records) {
//     if(records == {age: 28}) {
//         console.log('you are adult')
//     }else if(records === {age: 28}) {
//         console.log('you are still adult')
//     }else {
//         console.log('No recoreds found')
//     }
// }
// // let records = {age: 28}
// test({age: 28})

// console.log(+ true) // 1
// console.log(! 'true')

// ====== 🚀 NEXT 🚀 =======

// let a = {};
// let b = {ram: 'b'};
// let c = {key: 'c'}

// a[b] = 600; //a['object object']
// b[c] = 700
// b[b] = 500

// console.log(a[b]);
// console.log(a[c]);
// console.log(b[b]);
// console.log(b[c]);

// ====== 🚀 NEXT 🚀 =======

// let str = "abcdef";
// let str2 = 123;
// // output should be = a1b2c3def
// let j = 0;
// let i = 0;
// let res = "";
// while (i < str.length) {
//   res += str[i];
//   if (j < String(str2).length) {
//     res += String(str2)[j];
//     j++;
//   }
//   i++;
// }
// console.log(res);

// function compare(str, str2) {
//   let a = str.toString();
//   let b = str2.toString();
//   let output = "";
//   let i = 0;
//   for (; i < a.length && i < b.length; i++) {
//     output += a[i] + b[i];
//   }
//   //   return output;
//   console.log(i)
//   output += a.slice(i);
//   console.log(output);
// }
// // console.log(compare(str, str2));
// compare(str, str2);

// let st = "abc";
// let st2 = 123456;
// // output should be = a1b2c3456

// let res = "";
// let a = st2.toString();
// let i = 0;
// let j = 0;
// while (i < st.length && j < a.length) {
//   res += st[i] + a[j];
//   i++;
//   j++;
// }
// while (j < a.length) {
//   res += a[j];
//   j++;
// }
// console.log(res);

// function compare(st, st2) {
//   let a = st2.toString();
//   let result = "";
//   let i = 0;
//   for (; i < st.length && i < a.length; i++) {
//     result += st[i] + a[i];
//   }
//   result += a.slice(i);
//   //   return result;
//   console.log(result);
// }
// compare(st, st2);

// ====== 🚀 NEXT 🚀 =======

// let myPromise = new Promise((resolve, reject) => {
//   let success = false;
//   if (success) {
//     resolve("Operation successfull");
//   } else {
//     reject("Operartion failed");
//   }
// })
//   .then((message) => {
//     console.log("Message: ", message);
//   })
//   .catch((err) => {
//     console.log("Error: ", err);
//   })
//   .finally(() => {
//     console.log("Operation completed");
//   });

// ====== 🚀 NEXT 🚀 =======

// var a = 200;
// {
//   var a = 400;
// }
// let b = a;
// {
//   let b = -400;
// }
// console.log(b);

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.reduce((pre, curr, index) => pre + curr));
// console.log(arr.forEach((val, index) => console.log(val, index)));

// ====== 🚀 NEXT 🚀 =======

// function func1() {
//   return 5;
// }
// function func2() {
//   return 8;
// }
// let res = (func1(), func2());
// console.log(res);

// const arr = ["one", "two", "three"];
// const str = "Hello";

// const res = arr.includes("on");
// const res1 = arr.includes("onetwo");
// const res2 = str.includes("ll");

// console.log(res);
// console.log(res1);
// console.log(res2);
// console.log(true == '1')

// ====== 🚀 NEXT 🚀 =======

// let a = 21;
// let b = new Number(21);
// let c = Number(21);
// console.log(a === b);

// sum(2, 3);
// sum((2)(3));
// function sum(a, b) {
//   console.log(a);
//   console.log(b);
// }

// ====== 🚀 NEXT 🚀 =======

// Flat() method

// const arr = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];
// output should be = [1,2,3,4,5,6]

// const res = arr.flat();
// function flatArr(val) {
//   let res = [];
//   for (let i = 0; i < val.length; i++) {
//     for (let j = 0; j < val[i].length; j++) {
//       res.push(val[i][j]);
//     }
//   }
//   return res;
// }
// console.log(flatArr(arr));

// ====== 🚀 NEXT 🚀 =======

// let arr = [1];
// arr[null] = 10;
// console.log(arr)
// console.log(arr.length);
// arr[100] = 10;
// console.log(arr.length);

// ====== 🚀 NEXT 🚀 =======

// let str = "there is kamal";
// // output:
// // there
// // is
// // kamal
// function splitAndPrint(str) {
//   const words = str.split(" ");
//   console.log(words);
//   words.forEach((word) => {
//     console.log(word);
//   });
//   // 2nd way
//   //   let currentStr = "";
//   //   for (let i = 0; i < str.length; i++) {
//   //     if (str[i] == " ") {
//   //       console.log(currentStr);
//   //       currentStr = "";
//   //     }
//   //     currentStr += str[i];
//   //   }
//   //   console.log(currentStr);
// }

// splitAndPrint(str);

// ====== 🚀 NEXT 🚀 =======

// Array destructuring
// let [a, b] = [1, 2, 3, 4, 5];
// console.log(a, b);

// console.log(0/0)
// let k = 1 * undefined;
// console.log(k);

// ==== 🧠 Additional Questions Asked ====

// 🔹 Explain how JavaScript handles the event loop and microtask queue
// 🔹 What's the difference between == and ===?
// 🔹 How do you handle immutability in JavaScript (especially with objects and arrays)?
// 🔹 How to deep clone an object in JavaScript?
// 🔹 Explain hoisting with an example.

// 🔹 What is event bubbling and capturing in the DOM?
// Ans. =  event bubbling and event capturing are the two phases that describe how an event propagates through the DOM tree when it's triggered on an element.
// Event Bubbling = Direction: From the target element upwards to the root of the DOM
// Event Capturing = Direction: From the root of the DOM downwards to the target element

// 🔹 What are arrow functions and how do they handle this?

// 1️⃣ Difference between forEach() and map() in JavaScript
//  → map() returns a new array, forEach() doesn’t. map() is often used for transformations, while forEach() is used for iteration without returning anything.

// 2️⃣ Count the Occurrences of Each Element in an Array
// let Input = ["a", "b", "a", "c", "b", "a"];
// Output: { a: 3, b: 2, c: 1 }
// function occurrences(data) {
//   let result = {};
//   for (const element of data) {
//     result[element] = (result[element] || 0) + 1;
//   }
//   console.log(result);
// }
// occurrences(Input);

// 3️⃣ Output-Based Question
// setTimeout(() => console.log('1'), 0);
// Promise.resolve().then(() => console.log('2'));
// console.log('3');

// // Output: 3 2 1

// 4️⃣ Debounce Function in JavaScript
// Implement a debounce that delays execution until 2000ms after the last function call.

// 5️⃣ Flatten a Deeply Nested Array
// Input: [1, [2, [3, [4]]]]
// Output: [1, 2, 3, 4]

// 6️⃣ Promise Execution Order
// console.log('Start');

// setTimeout(() => {
//  console.log('Timeout');
// }, 0);

// Promise.resolve().then(() => {
//  console.log('Promise');
// });

// console.log('End');

// // Output: Start → End → Promise → Timeout

// 7️⃣ typeof null
// console.log(typeof null); // Output: 'object'

// ====== 🚀 NEXT 🚀 =======

// console.log("K" - 1);
// console.log("Kamal" + "100");
// console.log("2" + 2 + "2"); //When the + operator is used with a string and any other data type, JavaScript treats it as a string concatenation operator.
// console.log("2" + 2 - "1");

// ====== 🚀 NEXT 🚀 =======

// const a = {};
// const b = { name: "kamal" };
// const c = { name: "ram" };

// a[b] = { name: "shyam" };
// a[c] = { name: "radha" };

// console.log(a[b]);

// const x = 0;
// const y = false;

// console.log(x == y);
// console.log(x === y);

// console.log(NaN == NaN);
// console.log(NaN === NaN);

// let arr = [100, 50, 200, 150];
// console.log(arr.sort((a, b) => a - b));
// console.log(arr.slice(1, 3));
// console.log(arr.splice(1, 0, 89));
// console.log(arr)
// arr.unshift(102);
// arr.shift();
// console.log(arr);

// ====== 🚀 NEXT 🚀 =======

// let a = 10;
//     let b = a++ + ++a;
//     console.log(b);

// function curry(a) {
//   return function curry1(b) {
//     return function curry2(c) {
//       return a + b + c;
//     };
//   };
// }
// // console.log(curry(1)(2)(3))
// function infiniteCurry(a) {
//   let sum = a;
//   return function inner(b) {
//     if (b !== undefined) {
//       sum += b;
//       return inner;
//     } else {
//       return sum;
//     }
//   };
// }
// console.log(infiniteCurry(1)(2)(3)(4)());

// ====== 🚀 NEXT 🚀 =======

// function factorial(n) {
//     if (n === 0) {
//       return 1;
//     }
//     return n * factorial(n - 1);
//   }

//   // Without memoization
//   console.time('factorial without memoization');
//   console.log(factorial(5)); // 120
//   console.log(factorial(5)); // 120
//   console.timeEnd('factorial without memoization');

//   // Memoization implementation
//   function memoize(func) {
//     const cache = {};
//     return function(...args) {
//       const key = JSON.stringify(args);
//       if (cache[key]) {
//         return cache[key];
//       } else {
//         const result = func(...args);
//         cache[key] = result;
//         return result;
//       }
//     };
//   }

//   const memoizedFactorial = memoize(factorial);

//   console.time('factorial with memoization');
//   console.log(memoizedFactorial(5)); // 120 (computed and cached)
//   console.log(memoizedFactorial(5)); // 120 (retrieved from cache)
//   console.timeEnd('factorial with memoization');

// let obj = [1,2,[3,4]];
// let objSpred = [...obj]
// objSpred[0] = 10;
// objSpred[2][0] = 30;
// console.log(obj)
// console.log(objSpred)

// ====== 🚀 NEXT 🚀 =======

// console.log(x);
// console.log(abc);
// var x = 100;
// function abc(xyz) {
//   return xyz + xyz;
// }
// output =

// find duplicate and output should be: 10, 100
// let arr = [10, 40, 20, 10, 100, 50, 80, 100, 30];

// let seen = new Set();
// let duplicate = new Set();

// for (let item of arr) {
//   if (seen.has(item)) {
//     duplicate.add(item);
//   } else {
//     seen.add(item);
//   }
// }
// console.log(duplicate);
//A Set in JavaScript is a built-in object that lets you store unique values of any type — whether primitive values or object references.

// what is outpu =
// function check() {
//   return 50;
// }
// var check;
// console.log(check);

// ====== 🚀 NEXT 🚀 =======

// console.log(
//   [1, 2, 3, 4, 5].map((e) => {
//     if (e > 0) return;
//     return e * 10;
//   })
// );
