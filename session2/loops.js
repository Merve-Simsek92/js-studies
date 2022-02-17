// let i=0;
// let sum=0;

// while (i<6) {
//     sum+=i
//     i++
// }
// console.log(sum);



// do {

//     sum+=i
//     i++

//  } while (i<6);
// //  console.log({sum},{i})

// let i=+prompt("bir sayı giriniz");

// console.log(isNaN(i))


// while (isNaN(i)) {
//     i=+prompt("bir sayı giriniz");
//     console.log("bir sayı girdiniz")

// }

//loops


// for (let i = 0; i < 10; i++) {
//     console.log(i);
    
    
// }

// console.log(Math.floor(Math.random()*10)+1)

//  var langs=["java","javascript","python","php","react","html"]
// // console.log(langs);
// // console.log(typeof langs);
// console.log(langs.push("c#"))
// langs[7]="mysql"
// console.log(langs.unshift("ret"))
// console.log(langs.shift())
// console.log(delete langs[3])
// console.log(langs)


// var result;
// let x=+prompt("bir sayı girin");
// let y=+prompt("bir sayı giriniz");
// let operator=prompt("bir operatör girin");
// switch(operator){
// case "+":
//     result=x+y;
//     break;
// case "-":
//     result=x-y;
//     break;
// case "*":
//     result=x*y;
//     break;
// case "/":
//     result=x/y;
//     break;
//  default:
//      result="geçersiz sayı girdiniz"   
// }
// console.log(result);        
// let adder = new Function ('a','b', 'return a+b');

//  console.log(adder(2,6));

//  console.log(typeof adder);
// let i=0;
// let sum=0;
// while (i<6){
//     sum+=i
//     i++
// }
// // console.log(sum);
// let students=["john","jane","joe"];
// function sayHi(studentName){
//     console.log('welcome  ${studentName}');
//     for (let i=0;i<students.length;i++){
//         sayHi(student[i])
//     }
// }

// function sum (){
//     let sum=0;
//     console.log(arguments);
//     for (let i=0;i<arguments.length;i++){
//         sum+=arguments[i]
//     }
//     return sum;
// }
// console.log(sum(1,2,3,4,5));

// function sum (a,b, ...arg){
//     let sum=0;
//     console.log(arguments);
//     for (let i=0;i<arguments.length;i++){
//         sum+=arguments[i]
//     }
//     return sum;
// }
// console.log(sum(1,2,3,4,5));

// const bill = function(item, tax){
//     let total = 0;
//     for(let i =0; i < item.length; i++){
//         total += item[i]+item[i]*tax;
//     }
//     return total;
// }

// console.log(bill([10,15,20],0.18))

// const bill = function(tax, ...list){
//     let total = 0;
//     for(let i =0; i <list.length; i++){
//         total += list[i]+list[i]*tax;
//     }
//     return total;
// }

// console.log(bill(0.18,10,15,20))


// function concat(...args) {
	
//     return [].concat(...args)
// }
// console.log(concat([1], [2], [3], [4], [5], [6], [7]) )

// function pascalNumber1(n){
//     let sum = 0;
//     for(let i = 1; i < n+1; i++){
//     sum +=i
//     }
//     return sum
//     }
// console.log(pascalNumber1(5));
//  function pascalNumber1(n){
//      return n*(n+1)/2;
//  }
//  console.log(pascalNumber1(5));
//  function pascalNumber3(n){
//      if(n==1) return 1;
//      return n+pascalNumber3(n-1)
//  }
// console.log(pascalNumber3(7));

// function add100 (a){
//     return a+100;
// }
// let toplam=function(a){return a+100}

// let b=(a)=> {
//     return a+100
// }
// console.log(b(4))

// let b=(a)=> a+100
// console.log(b(90));
// let toplam=a=>a+100;
// console.log(toplam(30))
// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

// minMax([2334454, 5]) ➞ [5, 2334454]

// minMax([1]) ➞ [1, 1]

//     function sortArray(list){
//         list.sort(function(x,y){
//              return x-y;
//          })
         
//          console.log([list[0],list[list.length-1]]);
//      }
// console.log(sortArray([1]));

// let student="merve";
// function sayHi(studentname){
//     console.log(`welcome ${studentname}`);
// }
// console.log(sayHi(student));


// let students=["john","jane","joe"];
// function sayHi(student) {
//     console.log(`welcome ${student}`)
    
// }
// for(let i=0;i<students.length;i++){
//     sayHi(students[i])
// }

// function sum(){
//     let add=0;
//     console.log(arguments);
//     console.log(arguments.length);
//     for(let i=0;i<arguments.length; i++){
//         add+=arguments[i]
//     }
//     return add;

// }
// console.log(sum(1,3,2,5,6))

// function sum1(a,...args){
//     console.log(a);
//     console.log(args);
//     let sum=0;
//     for(let i=0;i<args.length;i++){
//     sum+=a*args[i]}
//     return sum;
// }
// console.log(sum1(0.5,4,5,6,7,45,65))

// function div2(num2,num1){
//     return num2 ? num1/num2 : "zero division error!"
// }
// //recursive function 
// function pascalnumber(n){
// sum=0
// if(n==1){
//     return 1;
// }return n+pascalnumber(n-1);
// }
// console.log(pascalnumber(7));

// //fuction expression
// let toplam=function (a){return a+100}

// let top = (a)=>{
//     return a+100
// }


// const plusTwo = makePlusFunction(2)
// const plusFive = makePlusFunction(5)
// const plusSeven = makePlusFunction(plusTwo(plusFive(0)))
// const plusTen = makePlusFunction(10)


// Your task is to create a Circle constructor that creates a circle with a radius provided by an argument. The circles constructed must have two methods getArea() (PI*r^2) and getPerimeter() (2*PI*r) which give both respective areas and perimeter (circumference).

// For help with this class, I have provided you with a Rectangle constructor which you can use as a base example.

// Examples
// let circy = new Circle(11)
// circy.getArea()

// // Should return 380.132711084365
// let circy = new Circle(4.44)
// circy.getPerimeter()

// // Should return 27.897342763877365

// function getArea(n){
// return Math.PI*n**2}
// console.log(getArea(11))
// function getPerimeter(n){
//     return Math.PI*2*n
// }
// console.log(getPerimeter(4.44))
// Create a function that returns true if the first array can be nested inside the second.

// arr1 can be nested inside arr2 if:

// arr1's min is greater than arr2's min.
// arr1's max is less than arr2's max.
// Examples
// canNest([1, 2, 3, 4], [0, 6]) ➞ true

// canNest([3, 1], [4, 0]) ➞ true

// canNest([9, 9, 8], [8, 9]) ➞ false

// canNest([1, 2, 3, 4], [2, 3]) ➞ false

// // function canNest(l1,l2){
    
// // l1.sort(function(x,y){
// //     return x-y;
// // })
// // l2.sort(function(x,y){
// //     return x-y;
// // })

// // if((l1[0]>l2[0]) && (l1[l1.length-1]<l2[l2.length-1])){
// // return true}
// // else{
// //     return false
// // }}

// // console.log(canNest([1, 2, 3, 4], [2, 3]))
// // console.log(canNest([3, 1], [4, 0]))
// // console.log( canNest([1, 2, 3, 4], [0, 6]))


// // var s = "Lorem Ipsum is simply dummy text of the printing and 'printing' typesetting industry.";

// // console.log(s.replace("dummy","hello"));

// // console.log(s.replace(/Dummy/i,"hello")) //regex /////  ile case sensitive i açma

// // console.log(s.replace(/e/g,"a"))

// // //search
// // var s = "Lorem Ipsum is simply dummy text of the printing and 'printing' typesetting industry.";
// // console.log(s.search(/Text/i));
// // console.log(s.indexOf(/text/i));

// // //slice()

// // var s = "Lorem Ipsum is simply dummy text of the printing and 'printing' typesetting industry.";

// // console.log(s.slice(0,5));
// // console.log(s.slice(6));

// // console.log(s.slice(12,-10));
// // console.log(s.split())


// // console.log(s.substr(22,5))
// // console.log(s.substring(22,0))









// const REGEXP = /blue|red/

// "red flag".match(REGEXP)  // red
// "blue flag".match(REGEXP)  // blue

// // Matches "blue" in "blue flag" and "red" in "red flag".
// Create a regular expression to match all red flag and blue flag in a string. You must use | in your expression. Flags can come in any order.

// Examples
// "red flag blue flag".match(REGEXP) ➞ ["red flag", "blue flag"]

// "yellow flag red flag blue flag green flag".match(REGEXP) ➞ ["red flag", "blue flag"]

// "pink flag red flag black flag blue flag green flag red flag ".match(REGEXP) ➞ ["red flag", "blue flag", "red flag"]
// Notes
// Check the Resources tab if you get stuck.

// The time has a format: hours:minutes. Both hours and minutes has two digits, like 09:00.

// Make a regexp to find time in the string: Breakfast at 09:00 in the room 123:456. In this task there’s no need to check time correctness yet, so 25:99 can also be a valid result. The regexp should not match 123:456.

//

// function  redblue(str){
//     result=[]
// if(str.includes("blue flag")==true){
//     result.push("blue flag");
// }if(str.includes("red flag")==true){
//     result.push("red flag");}

// return result;
// }
// console.log(redblue("yellow flag red flag blue flag green flag"));




// Given a string s, find the length of the longest substring without repeating characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.


// if(s.length <= 1) return s.length;

// let left = 0, right = 0, maxLen = 0;
// let seenChars = new Map();

// while(right < s.length){
    
//     if(!seenChars.has(s[right])){
        
//         seenChars.set(s[right], right);
        
//         maxLen = Math.max(maxLen, (right - left + 1));
//     }else{
        
//         if(seenChars.get(s[right]) + 1 > left){
//             left = seenChars.get(s[right]) + 1;
//         }
        
//         if(seenChars.get(s[right]) < left) {
//             seenChars.set(s[right], right);
//             maxLen = Math.max(maxLen, (right - left + 1));
//         }
        
//     }
//     right++;
// }
// return maxLen;
// };

// function sevenBoom(liste){
//     result=""
//     reversed=[]
//     for(let i of liste){
//         result+=i}
//     if(result.includes("7")==true)
//     {return "BOOOM";}
//     else{
//         return "there is not seven"
//     }
// }

// console.log(sevenBoom([1,27,5,78,8,45]))

// var pangram = "pijamalı hasta yağız şoföre çabucak güvendi"
// console.log(pangram.toLocaleUpperCase("tr-TR"))
// console.log(pangram.toUpperCase())
// var s="       welcome   \t to clarusway    "
// console.log(s.trim())


// var cars=["opel","audi",[1,2,true],"bmw"]
// console.log(cars);
// var cars2=Array.of("opel","audi")
// console.log(cars2)
// var cars3=new Array("opel","bmw")
// console.log(cars3);
// console.log(cars[0])
// console.log(cars[2][2])
// console.log(Array.isArray(cars));
// console.log(cars instanceof Array);

// //length
// /* const fruits = ["Banana", "Orange", "Apple"];
// // fruits[6] = "Lemon";

// console.log(fruits)
// console.log(fruits.length)
//  */

// const fruits = ["Banana", "Orange","Lemon"];
// const vegetables = ['Broccoli','Celery','Parsley','Artichoke']

// console.log(fruits.concat(vegetables));
// console.log(fruits.concat("fig","pear"));
// console.log(" "+fruits)
// console.log(fruits.toString());
// console.log(fruits+vegetables);

// const daltones = ['Joe','Jack','William','Avarel']
// console.log(daltones.sort());


// var num=[3,4,34,23,54]
// console.log(num.sort((a,b)=> a-b));

// var pangram = "pijamalı hasta yağız şoföre çabucak güvendi"
// console.log(pangram.toLocaleUpperCase("tr-TR"))
// console.log(pangram.toUpperCase())
// var s="       welcome   \t to clarusway    "
// console.log(s.trim())


// var cars=["opel","audi",[1,2,true],"bmw"]
// console.log(cars);
// var cars2=Array.of("opel","audi")
// console.log(cars2)
// var cars3=new Array("opel","bmw")
// console.log(cars3);
// console.log(cars[0])
// console.log(cars[2][2])
// console.log(Array.isArray(cars));
// console.log(cars instanceof Array);

//length
/* const fruits = ["Banana", "Orange", "Apple"];
// fruits[6] = "Lemon";

console.log(fruits)
console.log(fruits.length)
 */

// const fruits = ["Banana", "Orange","Lemon"];
// const vegetables = ['Broccoli','Celery','Parsley','Artichoke']

// console.log(fruits.concat(vegetables));
// console.log(fruits.concat("fig","pear"));
// console.log(" "+fruits)
// console.log(fruits.toString());
// console.log(fruits+vegetables);

// const daltones = ['Joe','Jack','William','Avarel']
// console.log(daltones.sort());


// var num=[3,4,34,23,54]
// console.log(num.sort((a,b)=> a-b));

// Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.

// Examples
// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

// toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]

// toArray({}) ➞ []

// function toArray(...arg){
//     result=[];
//     for(let i of arg){
//     result.push([i[key],i[value]) }
//     return result
// }
// console.log(toArray({ a: 1, b: 3}));

// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

// minMax([2334454, 5]) ➞ [5, 2334454]

// minMax([1]) ➞ [1,1] 

// function minMax(liste){
//     liste.sort((a,b)=> a-b);
//     return [liste[0],liste[(liste.length-1)]];
// }
// console.log(minMax([1, 2, 3, 4, 5]));

// Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.

// Examples
// numInStr(["1a", "a", "2b", "b"]) ➞ ["1a", "2b"]

// numInStr(["abc", "abc10"]) ➞ ["abc10"]

// numInStr(["abc", "ab10c", "a10bc", "bcd"]) ➞ ["ab10c", "a10bc"]

// numInStr(["this is a test", "test1"]) ➞ ["test1"]


//  function numIntStr(liste){
//      result=[];
//      for(let i of liste){
//          if( i.match(/[1-9]/i) != null)
//           result.push(i)}
//           return result}
        
 
// console.log(["abc", "ab10c", "a10bc", "bcd"]);

// function numIntStr(liste){
    
//     for(let i of liste){
//          i.match(/[1-9][a-z]/) }
    
// }
// console.log(["abc", "ab10c", "a10bc", "bcd"]);

// Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".

// For example, oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 = 4. oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5.

// Examples
// oddishOrEvenish(43) ➞ "Oddish"
// // 4 + 3 = 7
// // 7 % 2 = 1

// oddishOrEvenish(373) ➞ "Oddish"
// // 3 + 7 + 3 = 13
// // 13 % 2 = 1

// oddishOrEvenish(4433) ➞ "Evenish"
// // 4 + 4 + 3 + 3 = 14
// // 14 % 2 = 0


// function  oddishOrEvenish(n){
//     sum=0;
//     for(let i of n.toString()) 
//         {sum+=Number(i)
//     }

//     if(sum%2 ==0 ){
//         return "Evenish"
//     }else{
//         return "Oddish"
//     }
// }
// console.log(oddishOrEvenish(373))
// console.log(oddishOrEvenish(4433))
// Create a function that calculates the number of different squares in an n * n square grid. Check the Resources tab.

// Examples
// numberSquares(2) ➞ 5

// numberSquares(4) ➞ 30

// numberSquares(5) ➞ 55
// Explanation
// If n = 0 then the number of squares is 0
// If n = 1 then the number of squares is 1 + 0 = 1
// If n = 2 then the number of squares is 2^2 + 1 = 4 + 1 = 5
// If n = 3 then the number of squares is 3^2 + 5 = 9 + 5 = 14
// As you can see, for each value of n the number of squares is n squared + the number of squares from the previous value of n.

// function FirstReverse(str) { 
//     s=str.split("").reverse().join("")
//      // code goes here  
//      return s; 
   
//    }
      
//    // keep this function call here 
//    console.log(FirstReverse("merhaba"));



//    function TreeConstructor(strArr) { 
//     let child = {};
//     let parent = {};
//     for (let i = 0; i < strArr.length; i++){
//         let str = strArr[i].split('');
//         str.pop();
//         str.shift();
//         let pair = str.join('').replace(", ", ",").split(',');
//         child[pair[0]] = (child[pair[0]] || 0) + 1;
//         if (child[pair[0]] > 1) return false;
//         parent[pair[1]] = (parent[pair[1]] || 0) + 1;
//         if (parent[pair[1]] > 2) return false;
//     }
//     return true; 
// }
   
// TreeConstructor(readline());
// Have the function TreeConstructor(strArr) take the array of strings stored in strArr, which will contain pairs of integers in the following format: (i1,i2), where i1 represents a child node in a tree and the second integer i2 signifies that it is the parent of i1. For example: if strArr is ["(1,2)", "(2,4)", "(7,2)"], then this forms the following tree:



// which you can see forms a proper binary tree. Your program should, in this case, return the string true because a valid binary tree can be formed. If a proper binary tree cannot be formed with the integer pairs, then return the string false. All of the integers within the tree will be unique, which means there can only be one node in the tree with the given integer value.
// Examples
// Input: ["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"]
// Output: true
// Input: ["(1,2)", "(3,2)", "(2,12)", "(5,2)"]
// Output: false






// function BracketMatcher(str) { 
//     left=0
//     right=0
//     for(let i of str){
//       if(i=="("){
//         left+=1
//       }if(i==")"){
//         right+=1
//       }
//     }if(left != right){
//       return 0
//     }else{
//     // code goes here  
//     return 1 }
  
//   }
     
//   // keep this function call here 
//   console.log(BracketMatcher(readline()));


//   Have the function BracketCombinations(num) read num which will be an integer greater than or equal to zero, and return the number of valid combinations that can be formed with num pairs of parentheses. For example, if the input is 3, then the possible combinations of 3 pairs of parenthesis, namely: ()()(), are ()()(), ()(()), (())(), ((())), and (()()). There are 5 total combinations when the input is 3, so your program should return 5.
// Examples
// Input: 3
// Output: 5
// Input: 2
// Output: 2

// function BracketCombinations(num) { 
//     // By Doing sum search i found a formula that can achieve what this problem want
//     // called Catalan number (Catalan Formula)
//     // where catalan formula is ==> (2n!) / (n+1)! n!
  
//     // first i will calculate the factorial of the num
//     let factorial = (n) => {
//       let k = 1;
//       for(var i = n; i >= 1; i--){
//         k *= i;
//       }
//       return k;
//     }
    
//     // formula going down
//     const result = (factorial(2 * num)) / ((factorial(num + 1)) * (factorial(num)));
//     return result; 
//   }
     
//   // keep this function call here 
//   console.log(BracketCombinations(readline()));
  
//   Abdo0o received 15 points | Run code


//   FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements: the first element will represent a list of comma-separated numbers sorted in ascending order, the second element will represent a second list of comma-separated numbers (also sorted). Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. If there is no intersection, return the string false.
// Examples
// Input: ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
// Output: 1,4,13
// Input: ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]
// Output: 1,9,10
// Tags
// arrayfreevideo
//  Reset Code Light ThemeEmacsVim
// JavaScript
// function FindIntersection(strArr) { 

//     var a = strArr[0].split(', ')
//     var b = strArr[1].split(', ')
//     var result = a.filter(x => b.find(a => a === x))
//     return result.length > 0 ? result.join(',') : 'false'
  
//   }
     
//   // keep this function call here 
//   console.log(FindIntersection(readline()));


//   Create a function to partition an array from left to right.

// Examples
// movingPartition([-1, -1, -1, -1])
// ➞ [[[-1], [-1, -1, -1]], [[-1, -1], [-1, -1]], [[-1, -1, -1], [-1]]]

// movingPartition([1, 2, 3, 4, 5])
// ➞ [[[1], [2, 3, 4, 5]], [[1, 2], [3, 4, 5]], [[1, 2, 3], [4, 5]], [[1, 2, 3, 4], [5]]]

// movingPartition([]) ➞ []
// Notes
// With an n input, your output should be an array containing n-1 subarrays. Each subarray should have two elements: the left and the right side of the partition (both should be non-empty, unless the input array is empty).
// An empty array should return an empty array: []

function movingPartition(liste){
  result=[],r=[],a=[]
  for(i=0;i<liste.length;i++){
   result.push(liste[i])
   
 
  }return result
}
console.log(movingPartition([-1, -1, -1, -1]))



// function fibo(n){
//     fibbo=[1,1]

//     for(i=1;i<fibbo.length;i++){
//         fibbo.push(fibbo[fibbo.length - 2] + fibbo[fibbo.length - 1]);
//     }
//     return fibbo;
//   }
//   console.log(fibo(10));
    
// // program to generate fibonacci series up to n terms

// // take input from the user
// const number = parseInt(prompt('Enter the number of terms: '));
// let n1 = 0, n2 = 1, nextTerm;

// console.log('Fibonacci Series:');

// for (let i = 1; i <= number; i++) {
//     console.log(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;