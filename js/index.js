//alert('Hello');

let message = 'Hello Javascript!';
alert(message);

let name = prompt('Enter your name');
alert(name);

let age = Number(prompt('Enter your age'));
alert('Your age is '+ age)

age = age + 1;  // - / * %
alert('Next year you will be ' + age);

if (age >= 18 && age < 90) { // > < !== === || &&
    alert ('You are adult!');
} else {
    alert ('You are underaged!');
}

function add(a,b) {
    const result = a + b;
    return result;
}