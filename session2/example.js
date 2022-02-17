// // program to generate fibonacci series up to n terms

// // take input from the user
// // const number = parseInt(prompt('Enter the number of terms: '));
// // let n1 = 0, n2 = 1, nextTerm;

// // for (let i = 1; i <= number; i++) {
// //     nextTerm = n1 + n2;
// //     n1 = n2;
// //     n2 = nextTerm;}
// // console.log(nextTerm);
// // MinWindowSubstring(strArr) take the array of strings stored in strArr, which will contain only two strings, the first parameter being the string N and the second parameter being a string K of some characters, and your goal is to determine the smallest substring of N that contains all the characters in K. For example: if strArr is ["aaabaaddae", "aed"] then the smallest substring of N that contains the characters a, e, and d is "dae" located at the end of the string. So for this example your program should return the string dae.

// // Another example: if strArr is ["aabdccdbcacd", "aad"] then the smallest substring of N that contains all of the characters in K is "aabd" which is located at the beginning of the string. Both parameters will be strings ranging in length from 1 to 50 characters and all of K's characters will exist somewhere in the string N. Both strings will only contains lowercase alphabetic characters.
// // Examples
// // Input: ["ahffaksfajeeubsne", "jefaa"]
// // Output: aksfaje
// // Input: ["aaffhkksemckelloe", "fhea"]
// // Output: affhkkse

// // function hasKLetters(str1, str2) {
// //     var result = true;
// //     for (var x = 0; x < str2.length; x++) {
// //         var char = new RegExp(str2[x], 'g');
// //         if (char.test(str1) === false) {
// //             result = false;
// //         }
// //     }
// //     return result;
// //     LongestWord(sen) take the sen parameter being passed and return the longest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"
// // Examples
// // Input: "fun&!! time"
// // Output: time
// // Input: "I love dogs"
// // Output: love

// // getDays(
// //     new Date("June 14, 2019"),
// //     new Date("June 20, 2019")
// //   ) ➞ 6
  
  
// //   getDays(
// //     new Date("December 29, 2018"),
// //     new Date("January 1, 2019")
// //   ) ➞ 3
// //   // Dates may not all be in the same month/year.
  
  
// //   getDays(
// //     new Date("July 20, 2019"),
// //     new Date("July 30, 2019")
// //   ) ➞ 10

// // 1. The username is between 4 and 25 characters.
// // 2. It must start with a letter.
// // 3. It can only contain letters, numbers, and the underscore character.
// // 4. It cannot end with an underscore character.

// // If the username is valid then your program should return the string true, otherwise return the string false.
// // Examples
// // Input: "aa_"
// // Output: false
// // Input: "u__hello_world123"
// // Output: true 

// // function username(letter){
// //      if((letter.match(/[A-Za-z]/) != null) && (letter.match(/[_]/ != null)))
// //      {
// //          return true
// //      }else{
// //          return false
// //      }
// // }

// function username(letter){
//     if((letter.length<4)||(letter.length>25)){
//         return false
//     }result1=""
//     if(letter[(letter.length-1)] == "_"){
//         return false}
//     result1=letter.replace(/[a-z]/gi,"")
//     if((letter[0] != result1[0] )    && (result1.length != letter.length) ){
//         result1=result1.replace(/"_"/g,"");
//         result1=result1.replace(/[1-9]/g,"");
//         if(result1==""){
//             return true
//         }else{return false}
//     } return false
// }
// console.log(username("u__hello_world123"));
// // function username1(str){
// //  const letters = 'abcdefghijklmnopqrstuvwxyz'
// //   const us = '_';
// //   const nums = '01234567890';
// //   result=""
// //   if(str.length<3 || str.lenght>25){
// //       return false}
// //   if(str[(str.length-1)] !="_"){  
// //       return false}

  
// // }
// // console.log(username1("merve"));
// // Input: x = 121
// // Output: true
// // Explanation: 121 reads as 121 from left to right and from right to left.
// // Example 2:

// // Input: x = -121
// // Output: false
// // Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// // Example 3:

// // Input: x = 10
// // Output: false
// // Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// // function palindromnumber(n){
// //     result=""
// //     if(n<0){
// //         return false}
    
// //     for(var i=String(n).length-1;i>=0;i--){
// //         result+=String(n)[i]

// //     }if(String(n)==result){
// //         return true
// //     }else{
// //         return false
// //     }

// //     }
// //     console.log(palindromnumber(10));
// //     FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements: the first element will represent a list of comma-separated numbers sorted in ascending order, the second element will represent a second list of comma-separated numbers (also sorted). Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. If there is no intersection, return the string false.
// // Examples
// // Input: ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
// // Output: 1,4,13
// // Input: ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]
// // Output: 1,9,10
// function FindIntersection(liste){
//     first=liste[0].split(",");
//     second=liste[1].split(",")
//     result=[]
//     for(let i=0;i<first.length;i++){
//         if(second.includes(first[i])){
//             result.push(Number(first[i]))
//         }
//     }return result
    


    
// }
// console.log(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]));

function gcd(a,b){
    result1=[];
    result2=[];
    result=[]
    r=1
    for(let k=1;k<a;k++){
        if(a%k==0){
         result1.push(k)
        }}
    for(let j=1;j<b;j++){
            if(b%j==0){
             result2.push(j)
            }
    }for(let i=0;i<result1.length;i++){
                 if(result2.includes(result1[i])){
                    result.push(Number(result1[i]))
                }}
    for (let i = 0; i < result.length; i++) {
        
        r*=result[i]
    } return result     
}
console.log(gcd(30,60));
