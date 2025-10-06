function countVowels(text) {
   //Start Coding Here
   return text.
            split("").
            filter(
                (char) => 
                    char === "a" ||
                    char === "e" ||
                    char === "i" ||
                    char === "o" ||
                    char === "u" ||
                    char === "A" ||
                    char === "E" ||
                    char === "I" ||
                    char === "O" ||
                    char === "U" 
                ).
            length
};

let result1 = countVowels("hello");
console.log(result1); // 2

let result2 = countVowels("TECHUP");
console.log(result2); // 2