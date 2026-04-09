// Basic Types
// Primitive types (number, string, boolean)
// Array
// Tuples
// Enums
// Any, Unknown, Void, Null, Undefined, Never

// Primitive and Reference Types


/*
1. Type Inference
When we don't tell a variable what type of value it will store,
TypeScript automatically detects the type by looking at the value.
This is called Type Inference.

Example -:
let a = "Hello"; 
// TypeScript automatically understands that 'a' is a string


 <<------------------------------------------------------------------------------------------------------------------------->>


2. Type Annotation
When we explicitly tell a variable what type of value it should store,
it is called Type Annotation.

Example -:
let a: string = "Hello"


We can also allow multiple types using union types.

Example -:
let b: string | number | boolean
let b = "Abhay"


<<------------------------------------------------------------------------------------------------------------------------->>


3. Interfaces
In TypeScript, an interface is like a blueprint (structure) for an object.

It tells what properties and methods an object should have,
but not how they work.

Think of it like a form template: it defines what fields must exist.

Example -:
interface Person {
  name: string
  age: number
}

let user: Person = {
  name: "Abhay",
  age: 22
}


<<------------------------------------------------------------------------------------------------------------------------->>


4. Extending Interface
When we create an interface and then create another interface,
we can extend the first interface to reuse its properties.

Example -:

interface Person {
  name: string
  age: number
}

interface Admin extends Person {
  admin: boolean
}


When we use the Admin interface, it will include all properties
from the Person interface because it extends Person.

Example -:

let adminUser: Admin = {
  name: "Abhay",
  age: 22,
  admin: true
}


<<------------------------------------------------------------------------------------------------------------------------->>


5. Interface Merging
If we create two interfaces with the same name,
TypeScript automatically merges them.

Example -:

interface Person {
  name: string
}

interface Person {
  age: number
}

Now the final Person interface becomes:

{
  name: string
  age: number
}


<<------------------------------------------------------------------------------------------------------------------------->>

5. Type aliases
In Type aliases we can give exsisting type our modified name and we can use that name for give type we have to be use type key word

Example -:
type UserID = string;
let currentId: UserID = "abc-123"; // Valid

type UserID = string | number | null;
let currentId: UserID = "abc-123"; // Valid
*/