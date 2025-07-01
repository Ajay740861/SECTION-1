const arr1 = [3, 5, 7, 9, 2, 6];

const newarr = arr1.map((n) => {
    return n * 2;
});
console.log(newarr);

const names = ['Avinash', 'vishal', 'Farhan', 'Upendra', 'Sameer'];

const newnames = names.map((name) => {
    return 'Mr.' + name;
});
console.log(newnames);

console.log( 'abc'.toLocaleUpperCase() );

const uppeerName = names.map((name) => {
    return name.toUpperCase();
});

console.log(uppeerName);

const prices = ['r243.53', 'r28.523', 'r194.9', 'r188.999'];
//[243, 28, 194, 188]

console.log(parseInt('r243.53'.slice(1)));



//filter

const oddNums = arr1.filter((a) => {
    return a % 2 !==0;
});

console.log(oddNums);

const evenNums = arr1.filter((a) =>{
    return a % 2 ===0;
});

console.log(evenNums);


const prices2 = [2300, 1400,230, 2000, 3400, 450, 700];
// filter prices between 500 and 2500
const filteredPrice = prices2.filter((price) => {
    return price >= 500 && price <= 2500;
});
console.log(filteredPrice);





const friends = ['Raju', 'Pinki', 'kaliya', 'munni', 'Rinki'];
const longNames = friends.filter((name) =>{
    return name.length >= 5;
});

console.log(longNames);







