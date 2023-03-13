// const test = "Hello";

// function getTime(): number {
//   return new Date().getTime();
// }

// console.log(getTime());
// console.log(test);

// let msg: string = "Hello world!";

// console.log(msg);

interface Product {
  id: number;
  name: string;
  price: number;
}

function getProduct(id: number): Product {
  return {
    id: id,
    name: `Awesome Gadget ${id}`,
    price: 99.5,
  };
}

const showProduct = (name: string, price: number) => {
  console.log(`The product ${name} costs ${price}$.`);
};

showProduct("Apple", 399);

const product = getProduct(1);
showProduct(product.name, product.price);

let names: string[] = ["John", "Jane", "Peter", "David", "Mary"];

console.log(names.join(", "));

let big: bigint = 9007199254740991n;

console.log(big);

let pending: boolean;
pending = true;

console.log(pending);

/* -- Object type -- */
let employee: object;

employee = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  jobTitle: "Web Developer",
};

console.log(employee);

let worker: {
  firstName: string;
  lastName: string;
  age: number;
  jobTitle: string;
};

worker = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  jobTitle: "Web Developer",
};

console.log(worker);

let developer: {
  firstName: string;
  lastName: string;
  age: number;
  jobTitle: string;
} = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  jobTitle: "Web Developer",
};

console.log(developer);

/*  -- object vs. Object -- */
/* TypeScript has another type called Object with the letter O in uppercase. It’s important to understand the differences between them.

The object type represents all non-primitive values while the Object type describes the functionality of all objects.

For example, the Object type has the toString() and valueOf() methods that can be accessible by any object. */

/* -- Array -- */

let fruits: string[];
fruits = ["Apple", "Orange"]

let scores : (string | number)[];
scores = ['Programming', 5, 'Software Design', 7]; 

console.log(scores);

/* -- Tuple -- */

let skill: [string, number];
skill = ['Programming', 5];

console.log(skill);

let color: [number, number, number] = [255, 0, 0];
console.log(color);


let bgColor: [number, number, number, number?];

bgColor = [0, 255, 255, 0.5];
console.log(bgColor);

bgColor = [0, 255, 255];
console.log(bgColor);




