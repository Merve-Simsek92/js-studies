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

    function sortArray(list){
        list.sort(function(x,y){
             return x-y;
         });
         console.log(list);
     }
console.lo


