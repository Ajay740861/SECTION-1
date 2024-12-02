const user ={
    name: 'Raju',
    email: 'raju@mail.com',
    passward: 'abc1234'
}

console.log(user);
console.log(user.name);
console.log(user['email']);

user.passward = 'xyz1234' ;
console.log(user);
user.address = 'Lucknow';
console.log(user);

console.log( Object.keys(user) );
console.log( Object.values(user) );

const smartPhones = {
    brand : 'samsung',
    model : 'Galexy M31',
    colors : ['Black', 'Blue', 'Red']
};

// change the model of phone to 'Galaxy s24'
// acces the second color 
//replace the first color with 'White'
// add a new color 'Green'

console.log( smartPhones.colors );

smartPhones.color[1]
smartPhones.colors[0] ='white';
smartPhones.colors.push('Green');

const smartPhonesArray = [
    {
        brand: 'samsung',
        model: 'Galaxy M31',
        price: 13999,
        color:['Black', 'Blue','Red'],
    },
    {
        brand: 'OnePlus',
        model: '8T',
        price: '42999',
        color: ['Black','silver'],  
    },

    {
        brand: 'Apple',
        model: 'iphone 12',
        price: '79900',
        color: ['Black','White','Green'],

    }, 

    {
        brand: 'Realme',
        model: 'Narzo 20 Pro',
        price: '14999',
        color: ['Black', 'White', 'Green'];
    },
];

console.log(smartPhonesArray.length);
console.log(smartPhonesArray[1].price);

//access 2nd color of third phone
console.log(smartPhones[2].color[1]);

// replace the first color of 4th phone with 'Silver'
smartPhonesArray[3].color[0] = 'Silver';


//add a new color 'Yellow' to the 5th phone
smartPhonesArray[4].color.push('Yellow');
console.log(smartPhonesArray[4]);

const budgetPhones = smartPhonesArray.filter((phone) => { return phone.price > 15000 && phone.price});

console.log(budgetPhones);

const brands = smartPhonesArray.map((phone) => { return phone.brand});
console.log(brands); 

// filter all phones having 'black' color

console.log( [1, 2, 3, 4, 5].includes(7) );

// filter all samsung phones
const samsungPhones = smartPhonesArray.filter((phone) => { return phone.brand === 'samsung'});
console.log(samsungPhones);

const keyword = 'sa';
const filterPhones = smartphones = samsungphonesArray.filter((phone) => {
    return phone.brand.toLowerCase().includes.(keyword.toLower)
});















