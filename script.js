let x = 10;
var y = "Hello world!!";
const z = 20.2;

const arr = [1, "test", 3, 4, 5];
const car = [];
car[0] = "BMW";
car[1] = "Audi";
const fruit = new Array("Apple", "Gae", "Orang");
const profile = [[1, 2, 3], "name", "age"];
console.log(profile[0][1]);
console.log(fruit);

// Array method
fruit.push("Mango");
fruit.shift();
console.log(fruit);

arr.map((item) => {
    console.log(item);
});

// Object
const person = {
    firstName: "Jhon",
    lastName: "Doe",
    age: 30,
    eyeColor: ["blue"],
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

person.address = {
    street: "5th Avenue",
    city: "New York",
};

console.log(person.fullName());

// function
function sum(a,b) {
    return a + b;
};

const diff = (a,b) => a - b;
function sub(a,b) {
    console.log(a-b);
};

const mul = (a,b) => {
    return a * b;
};

const div = (a,b) => a/b;

const result = sum(10,20);
console.log(result);

document.getElementById("messege1").innerHTML = "Hello World!!";
 