// wap to check if a number is perfect square.

const n = 10;
console.log(n ** 0.5);

if (Number.isInteger(n ** 0.5)) {
    console.log('perfect square');
} else {
   console.log('not a perfect sqare')
}


// WAP to print Grade acc. to marks.
 
const m = 49;
if(m <= 100 && m >= 80){
    console.log('Grade A');
}else if( m <= 80 && m >= 60){
    console.log('Grade B');
}else if (m <= 60 && m >=40){
    console.log('Grade c');
}else{
    console.log('Invalid Marks');
}


// WAP to check if a number is a positive, negative or zero.
// WAP to check if atriangle is equilateral, Isosceles or scalene.

const [side1, side2,side3] = [6, 8, 9];

if (side1 === side2 === side3){
    console.log('Eqvilentral Trriangle');
}else if(side1 === side2 || side1 === side3 || side2 === side3){
    console.log('isoceles Trangle');
}else{
    console.log('Scalene Traingle');
}


