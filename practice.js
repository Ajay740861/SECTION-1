// program to add 2 numbers

const [n1, n2] = [3, 5];
const sum = n1 + n2;

console.log(sum);

console.log(35 % 2 === 0);
const n3 = 234;
if (n3 % 2 === 0) {
    console.log('even');
} else {
    console.log('odd');
}

const n4 = 3455;

if (n4 > 0) {
    console.log('positive');
} else if (n4 < 0) {
    console.log('negative');
} else {
    console.log('zero');
}

// wap to check if a number is divisible by 7

const n5 = 14;
if (n5 % 7) {
    console.log('divisible');
} else {
    console.log('not divisible')
}

// wap to check if a person eligible for DL
const age = 23;
if (age >= 18) {
    console.log('eligible');
} else {
    console.log('not eligible');
}

// wap to check if a number is divisible by both 3 and 5
const n6 = 20;
if (n6 % 3 === 0 && n6 % 5 === 0) {
    console.log('divisible by 3 and5');
} else {
    console.log('not divisible by 3 and 5');
}

// wap to check if a number is divisible by 7 or 11
const n7 = 30;
if (n7 % 7 === 0 || n7 % 11 === 0) {
    console.log('divisible by 7 and 11');
} else {
    console.log('not divisible by 7 and 11');

}


//loop
for(let i=1; i<=1000; i++){
    console.log(i);  
}

// wap to print all numbers divisible by 7 between 50 to 200
for(let i=50; i<=200; i++){
    if(i%7==0){
        console.log(i);

    }
}  