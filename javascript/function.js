function addNums(a, b){
    c = a+b;
    console.log(c);
    
}

addNums(10, 20);
//console.log(c);

const avg = function(a, b, c){
    return (a+b+c) / 3 ;
    
}
const result = avg(19, 21)

 console.log(result);
 
 const factorial = (n) => {
    let f = 1;
    for (let i=1; i<=n; i++){
        f = f*i;
    }
    return f;

 }
 const fact = factorial(6);
 console.log(fact); 
 
