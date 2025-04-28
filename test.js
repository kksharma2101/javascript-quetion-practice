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

let obj = [1,2,[3,4]];
let objSpred = [...obj]
objSpred[0] = 10;
objSpred[2][0] = 30;
console.log(obj)
console.log(objSpred)