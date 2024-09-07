const person = {
    name: 'Max',
    age: 30,
    hobbies: ['reading', 'cooking'],
    greet: function() {
        console.log('Hello, my name is ' + this.name + ' and I am ' + this.age + 'years old.');
    }
};

const printName = ({name, age}) => {
    console.log(name + ' ' + age);
}

// DESTRUCTING ARRAYS
const hobbies = ['reading', 'cooking'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);

/* Reminders when using destruc