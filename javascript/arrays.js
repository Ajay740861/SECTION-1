const myarray = [23, 'nice', false, undefined];

console.log( typeof myarray );

const movies = ['Avengers', 'Suryavansham', 'Ghayal', 'Mard', 'Sholey',
    'Emoji Movie'];

    // indexing
    console.log(movies[2]);
    console.log(movies.indexOf('Mard'));
    console.log(movies.at(-2));

    // slicing
    console.log( movies.slice(1, 4));
    console.log( movies.slice(1) );
    console.log( movies.slice(1, 40) );
    console.log( movies.slice(-4, -2) );

    // adding and removing elements  
    movies.pop(); // remoes last element
    movies.shift(); // removes first element

    console.log(movies);
    
    movies.push('Bahubali'); //adds element at the end
    movies.unshift('MI'); //adds element at the begining
    console.log(movies);

    // inserting and replacing elements
    //movies.splice(2, 2);
    //console.log(movies);

    //movies.splice(2, 2, 'Dangal', 'PK', '3 Idiots');
    //console.log(movies);
    
    movies.splice(2, 0, 'Dangal', 'PK', '3 Idiots');
    console.log(movies);

    const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Berrty', 'Mango', 'Orange'];
    // Add 'grapes' to the end of the array.
    // fruits.push('Grapes');
    console.log(fruits);

    // Remove 'Banana' from the array.
    // fruits.splice(1,1);
    // console.log(fruits);
    
    
    // Replace 'cherry' with 'Pineapple' using splice
    // fruits.splice(2, 1, 'pineapple');
    // console.log(fruits);
    

    //Add 'Fig' and 'Kiwi' after 'Date' using splice.
    fruits.splice(3,0, 'kiwi','fig');
    console.log(fruits);

    // Slice the array to get the three fruits after 'Banana'.
    // console.log(fruits.slice (1, 4));
    
    //Remove  element from the array starting from index 2 to 5.
    // fruits.unshift(cherry, mango);
    // console.log(fruits);

    // Add 'Watermelon' at index 0;
    // fruits.push(watermelon);
    // console.log(fruits);

    // Slice the array to only contain the fruit at index 3 and fruit at position 5.
    // console.log(Date, mango);

    // the element at index -5.
    // console.log(cherry);

    // log the index of 'Mango' in the array.
    // console.log(fruits.indexOf(mango));

    // Log the fruit at the last index
    // console.log(fruits.indexOf('orange'));

    // Remove the 2nd,3rd, and 4th element from the array using splice.
    // fruits.splice('cherry', 'date', 'mango');
    // console.log(fruits);

    // Log the length of the array.
    // console.log(fruits.length);
    
    
    // Log index and position of 'Date', 'Banana', 'Orange' in the array.



    
    
    

    
    
    
    
    



    

    
    
    
    
    
    
    
    
