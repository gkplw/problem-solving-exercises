function removeDuplicates(arr) {
   //Start Coding Here
   let count = {};
   for (let each of arr) {
    if (count[each]) {
        count[each] += 1;
    } else {
        count[each] = 1;
    }
   }
   return Object.keys(count)
};

let result1 = removeDuplicates([1, 2, 2, 3, 3, 3]);
console.log(result1); // [1, 2, 3]

let result2 = removeDuplicates([5, 5, 5, 5]);
console.log(result2); // [5]