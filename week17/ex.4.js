function findLongestWord(text) {
   //Start Coding Here
   let result = ""
   const arr = text.split(" ");
   for (let each of arr) {
        if (each.length > result.length) {
            result = each;
        }
   }
   return result
};

let result1 = findLongestWord("I love programming very much");
console.log(result1); // "programming"

let result2 = findLongestWord("TechUp helps people switch careers");
console.log(result2); // "careers"
