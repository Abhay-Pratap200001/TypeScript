// Learning TypeAnnotaion and Inference in TypeScript

// variable annotation in type annotation we have to tell manually what type will be 
let username: string = "Rahul";
let age: number = 22;
let isLoggedIn: boolean = true;

// function annotation
function addNumbers(a: number, b: number): number {
  return a + b;
}

const result: number = addNumbers(5, 3);
console.log(result);




// TypeScript infers we dont have to tell manually what type will be typescript automatically detect the type 
let city = "Delhi";

let price = 499;

let isAvailable = false;

function multiply(a: number, b: number) {
  return a * b; // inferred as number
}
