// program to generate fibonacci series up to n terms

// take input from the user
// const number = parseInt(prompt('Enter the number of terms: '));
// let n1 = 0, n2 = 1, nextTerm;

// for (let i = 1; i <= number; i++) {
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;}
// console.log(nextTerm);
// MinWindowSubstring(strArr) take the array of strings stored in strArr, which will contain only two strings, the first parameter being the string N and the second parameter being a string K of some characters, and your goal is to determine the smallest substring of N that contains all the characters in K. For example: if strArr is ["aaabaaddae", "aed"] then the smallest substring of N that contains the characters a, e, and d is "dae" located at the end of the string. So for this example your program should return the string dae.

// Another example: if strArr is ["aabdccdbcacd", "aad"] then the smallest substring of N that contains all of the characters in K is "aabd" which is located at the beginning of the string. Both parameters will be strings ranging in length from 1 to 50 characters and all of K's characters will exist somewhere in the string N. Both strings will only contains lowercase alphabetic characters.
// Examples
// Input: ["ahffaksfajeeubsne", "jefaa"]
// Output: aksfaje
// Input: ["aaffhkksemckelloe", "fhea"]
// Output: affhkkse

// function hasKLetters(str1, str2) {
//     var result = true;
//     for (var x = 0; x < str2.length; x++) {
//         var char = new RegExp(str2[x], 'g');
//         if (char.test(str1) === false) {
//             result = false;
//         }
//     }
//     return result;
//     LongestWord(sen) take the sen parameter being passed and return the longest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"
// Examples
// Input: "fun&!! time"
// Output: time
// Input: "I love dogs"
// Output: love
