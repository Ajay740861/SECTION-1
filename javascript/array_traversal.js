const arr1 = [2, 4, 7, 9, 12, 47];

for(let i = 0; i < arr1.length; i++) {
    console.log(arr1[1], i);   
}

console.log('-------------------');

for(let n of arr1){
    console.log(n);   
}

console.log('---------------');

arr1.forEach( (n, i, a) => { 
    console.log(n, i, a);
});