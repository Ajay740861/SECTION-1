let n = 34;

if(n%2 === 0){

    var message = 'good';
    var message2 = 'nice';
    var message3 = 'cool';

    console.log('even');
}else{
    console.log('odd');
}

console.log(message);
console.log(message2);
console.log(message3);

// WAP to check if a number is divisible by both 7 and 11

const m = 344;

if (m % 7 === 0 && m % 11 ===0){
    console.log('Division by both 7 and 11');
}else{
    console.log('Not divisible by both 7 and 11');
}

// Program to check a number is perfect square

let x =10;
for(let i=1;i<x/2;i++){
    if(i*i===x){
        console.log(`${x} is a perfect square`);
        break;
    }
    if(i*i>x){
        console.log(`${x} is not a perfect square`);   
    }
}
//Wap to print Grade according to marks.

// let x = 30-50;
// let x = 50-80;
// let x =80-100;
let num = 49;
if(x<=50){
    console.log("c");
}

else if(x<=80){
    console.log("grade b");
}

else if(x<=100){
    console.log("grade a");
}
else{
    console.log("invalid");
}




