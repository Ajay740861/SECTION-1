const arr = ['hellow', 345, true];

console.log( typeof arr);

console.log( Array.isArray(arr));

const movies = [ 'Stree', 'Spiderman', 'John wick', 'salaar', 'Pathan'  ];

console.log( movies.length ); //also works for strings

// indexing
console.log( movies[2] );
console.log( movies.indexOf(' Pathan ') ); //also work for strings

console.log( movies[ -2 ] );
console.log( movies.flat(-2) );

movies[2] = 'James Bond';

console.log( movies);

//slice

console.log( movies.slice(1, 4)); //also work for strings
console.log( movies.slice(2));
console.log(movies.slice(-3));


//adding and removing elements

movies.push('Batman'); //adds to the end
movies.unshift('Superman'); //addsto the begining

console.log(movies);

movies.pop(); // removes from the end
movies.shift(); // removes from the begining

console.log(movies);

movies.splice(2, 2, 'Flash', 'Arrow', 'Shadow and Bone'); // removes 2 element starting from index 2
console.log(movies);

