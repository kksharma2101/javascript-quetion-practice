// Question - What is prototypes in javascript?
// Ans. javascript prototypes is a fundamental concept that enables inheritance is an prototype is a bluprint or a parent object to another object can inherit properties or methods.

// Question - What is Memoization?
// Ans. memoization is the optimized technique is used in programing to speed up execution of a function calculations.

// Question - What is Event bubling?
// Ans.

// Question - What is function curring?
// sequence of a functions

// Question - What is pure and impure function?
// pure function is the that function its output will be same if we call multiple time, and impure is work differently give the output different.

// Question - What is the shallo and deep copy?
// A shallow copy creates a new object or array, A deep copy creates a completely independent copy

// Question - What is the closure?
// Question - What is the API?
// Question - What is the connection in react?
// Question - What is the MVC in react?
// Question - What is the event in react?
// Question - What is the Git?
// Question - What is the Authentication?
// Question - What is polyfill?
// Question - What is difference between bold tag and strong tag in html?
// Question - What is limitations (disadvantage) of react.js?
// Question - What is useMemo and useCallback?
// Question - What is callback function and rest parameters?
// function isCallbackFn(callbackFn, ...a) {
//   console.log(a);
//   callbackFn();
// }
// function callbackFn() {
//   console.log("Hello callback function");
// }
// isCallbackFn(callbackFn, "myFunc", "is", "not", "callback", "function");

//shallow copy
// let obj = {
//   name: "kamal",
//   details: { city: "rampur", age: 26 },
// };
// // let shallowCopy = { ...obj };
// let deepCopy = JSON.parse(JSON.stringify(obj));
// deepCopy.details.city = "shyampur";

// console.log(obj.details.city);
// console.log(deepCopy.details.city);

// let a = 10;
// let b = a++ + ++a;
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

// ==== next ====

// const num = [1,2,3,4];
// num[100] = 500;
// console.log(num);

// ==== next ====

// console.log(typeof typeof 100);

// ==== next ====

// const arr = [... 'kamal'];
// console.log(arr)

// ==== next ====

// console.log(parseInt('10+2'));
// console.log(parseInt('7FM'));
// console.log(parseInt('F9M'));
// console.log(typeof parseInt())

// ==== next ====

// console.log([1,2,3,].map((num) => {
//     if(num>0) return;
//     return num * 2;
// }))

// ==== next ====

// {
//     function abc() {
//         console.log('kamal')
//     }
// }
// abc()

// ==== next ====

// function abc(a, b) {
//   "use strict";
//   a = 100;
//   b = 200;
//   return arguments[0] + arguments[1];
// console.log(a+b)
// }
// console.log(abc(50,30));

// ==== next ====

// const arr = [1,2,3,4,5,6,6,7,7,8,9];
// const res = arr.map((num) => num > 5)
// const res = arr.filter((num) => num != 4)
// console.log(res) // there is the used comparision operators
// arr.splice(2,5)
// arr.slice(2,4)
// console.log(arr)

// ==== next ====

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

// ==== next ====

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

// ==== next ====

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

// ==== next ====

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

// ==== next ====

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

// ==== next ====

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

// ==== next ====

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

// ==== next ====

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

// ==== next ====

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

// ==== next ==== Flat() method

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

// ==== next ====
// let arr = [1];
// arr[null] = 10;
// console.log(arr)
// console.log(arr.length);
// arr[100] = 10;
// console.log(arr.length);

// ==== next ====
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

// ==== next ====
// Array destructuring
// let [a, b] = [1, 2, 3, 4, 5];
// console.log(a, b);

// console.log(0/0)
// let k = 1 * undefined;
// console.log(k);
