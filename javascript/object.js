const user = {
    name : 'Lestrade',
    email : 'lestrade@mail.com',
    password : 'abc1234',
    age : 23
};

console.log(user.name);
console.log(user['email']);


user.address = 'Lucknow';
console.log(user);
user.password = 'xyz789';
console.log(user);

console.log( Object.keys(user) );
console.log( Object.values(user) );


