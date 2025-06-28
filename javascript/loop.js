for(let i=0; i<10; i++){
    console.log(i);
    
}

a = 10;
while(a<20){
    console.log(a);
    a++;
}

b = 10;
do{
    console.log(b);
    b++;
}while(b>20);

//WAP to check if a number is perfect square
let n1 = 16;

let root = n1**0.5;

console.log(root);

if( Number.isInteger(root) ){
    console.log('perfect square');

}else{
    console.log('not a perfect squar');
    
}

// WAP to check if a number is prime
let n2 = 13;
let isPrime = true;

for(let i=2; i<n2; i++){
    if(n2 % i === 0){
        console.log('not prime');
        isPrime = false;
        break;   
    }
}

if(isPrime){
    console.log('prime');
    
}