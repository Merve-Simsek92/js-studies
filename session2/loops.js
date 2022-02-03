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

function canNest(l1,l2){
    
l1.sort(function(x,y){
    return x-y;
})
l2.sort(function(x,y){
    return x-y;
})

if((l1[0]>l2[0]) && (l1[l1.length-1]<l2[l2.length-1])){
return true}
else{
    return false
}}

console.log(canNest([1, 2, 3, 4], [2, 3]))
console.log(canNest([3, 1], [4, 0]))
console.log( canNest([1, 2, 3, 4], [0, 6]))










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

function sevenBoom(liste){
    result=""
    reversed=[]
    for(let i of liste){
        result+=i}
    if(result.includes("7")==true)
    {return "BOOOM";}
    else{
        return "there is not seven"
    }
}

console.log(sevenBoom([1,27,5,78,8,45]))