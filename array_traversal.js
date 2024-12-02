const nums = [3, 7, 9, 2, 1, 6, 8];

for (let i=0; i < nums.length; i++) {
    console.log(nums[i]);
}
console.log('--------');

for(let n of nums){
    console.log(n);
}

console.log('---------');

nums.forEach( (a, b) => { console.log(a,b); } );


// wap to print all even numbers from the array

nums.forEach((a) => {
    if(a%2 === 0){
        console.log(a);
    }
} );       

// wap to filter all odd numbers
const odds = [];

nums.forEach((a) => {
    if(a%2 !==0) {
        //console.log(a);
        odds.push(a);
    }
});

console.log(odds);

// wap to store square of all nums in another array

const squares = [];
nums.forEach((a) => {
     // console.log(a ** 2);
     squares.push(a ** 2);
});

console.log(squares);

// map Functions
const sqr = nums.map( (n) => { return n**2} );
console.log(sqr);

const names = [ 'raju', 'ramu', 'pinki', 'kaliya', 'chutki'];
console.log( 'sdsd'.toUpperCase() );

const upperNames = names.map((n) => { return n.toUpperCase()});
console.log(upperNames);

const prices = ['r234.56', 'r345.67', 'r456.78', 'r567.89','r678.90'];

console.log( 'r56345'.slice(1) );
console.log( parseInt('372467'));

// wap to convert all prices to integer 
// [234, 345, 456, 567 678]
const intPrices = prices.map( (p) => {return parseInt(p.slice(1))})
console.log(intPrices);

const prices2 = [2400, 340, 890,340, 12000,340];

//addd 18% GST to all prices

console.log( 3400 + 3400 * 0.18 );
prices2.map( () => {})

const fullnames = [ 'Aush joshi', 'Ankit Singh', 'Shreyansh Saxena', 'Hamid khan'];
['Ayush', 'Ankit', 'Shreyansh', 'Hamid']
console.log( 'raju rastogi'.split(' '));
// console.log(firstname);


// filter 
const budgetPrices = prices2.filter( (p) => { return p< 1000 } );

const nums2 = [3, 7, 9, 2, 1, 6, 8];

// filter all odd number
const oddNums  = nums2. filter( (n) => { return n % 2 !== 0});
console.log(oddNums);

const friendNames =  ['raju', 'ramu', 'pinki', 'kaliya', 'chutki'];
const bestfriends 
