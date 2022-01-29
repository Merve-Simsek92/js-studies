//  let str="Clarusway";
// // console.log(str.length);
// // console.log(str[8]);

// for (let i=0; i<str.length;i++){
//     console.log({i},str[i]);
// }

// for(let i=0;i<=100;i++){
//     if(i%5==0) continue;
//     console.log(i)
// }

// while (true) {
//     let x=prompt("bir sayı giriniz:\n q ile çıkış yaptınız");
//     if(x=="q"){
//         console.log("çıkış yapıldı");
//         break;

//     }else if(isNaN(x)){
//         continue;
//     }else {
//         console.log('${x} in karesi=${x*x}');
//     }
// }

// console.log(Math.random()*6+1);
// console.log(Math.trunc(Math.random()*6)+1);
// let x,y;
// let count=0;
// let cift=0;
// while (true){
//     x=Math.trunc(Math.random()*6)+1;
//     y=Math.trunc(Math.random()*6)+1;
//     if(x==6 && y==6){
//         count++;
//         console.log(x,y,"kazandınız");
//         break;
//     }else if (x==y && x!=6){
//         cift++;
//         console.log(x,y ,'${cift}. çift zar');
//         if(cift==3)
// {
//     console.log("kaybettiniz");
//     break;
// }    }
// console.log(x,y);
// count++;
// }

// function sayHi() {
//     console.log("hello");
    
// }
// sayHi();

// let userName;
// function sayHi(name = "new user") {
//     console.log('Hello ${name}');

    
// }
// sayHi(userName);

// function add100(num1) {
//     return num1 +100
    
// }
// console.log(add100(4));

// function add100(num1,num2=0) {
//     return num1 + num2
    
// }
// console.log(add100(4));

// let square = function(a) { return a*a
    
// };
// console.log(square(5))
// let adder =new Function("a","b","return a+b");
// console.log(adder(2,6))
// console.log(typeof adder)

// let sum=function(a,b){return a+b;};
// let addTwo=function(num1){
//     return sum(num1,2)
// }
// console.log(addTwo(5));

let student = {};

student.name="mesut";
function sayHi3(student) {
    console.log()
    
}