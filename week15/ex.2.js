function sumEvenNumbers(numbers) {
   //Start Coding Here
   let result = 0;
   for (let num of numbers) {
    if (num % 2 === 0) {
        result += num;
    }
   }
   return result
};

let result1 = sumEvenNumbers([1, 2, 3, 4]);
console.log(result1); // 6

let result2 = sumEvenNumbers([7, 11, 20, 8]);
console.log(result2); // 28