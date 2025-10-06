function findMode(arr) {
   //Start Coding Here
   let result = 0;
   let count = 0;
   for (let num of arr) {
    let count1 = arr.filter((n) => n === num).length
    if (count1 > count) {
        count = count1;
        result = num;
    }
   }
   return result
};

let result1 = findMode([1, 2, 2, 3, 3, 3, 4]);
console.log(result1); // 3

let result2 = findMode([7, 7, 1, 1, 7]);
console.log(result2); // 7

let result3 = findMode([7, 7, 1, 1, 7, 1,]);
console.log(result3); // 7