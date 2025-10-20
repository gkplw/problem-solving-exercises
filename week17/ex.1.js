function findCommon(arr1, arr2) {
   //Start Coding Here
   let result = [];
   for (let each1 of arr1) {
    for (let each2 of arr2) {
        if (each1 === each2) {
            result.push(each2);
        }
    }
   }
   return result
};

let result1 = findCommon([1, 2, 3], [2, 3, 4]);
console.log(result1); // [2, 3]

let result2 = findCommon([5, 6], [7, 8]);
console.log(result2); // []