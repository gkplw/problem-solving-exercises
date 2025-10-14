function capitalizeWords(sentence) {
   //Start Coding Here
   return sentence
   .split(" ")
   .map((char) => char[0].toUpperCase() + char.slice(1))
   .join(" ")
};

let result1 = capitalizeWords("hello world");
console.log(result1); // "Hello World"

let result2 = capitalizeWords("techup career prep");
console.log(result2); // "Techup Career Prep"