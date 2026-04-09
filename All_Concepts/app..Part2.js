"use strict";
//<<-------------Part 2 of TypeScripr-------------- >>//
Object.defineProperty(exports, "__esModule", { value: true });
/*
1. Union Types
When we give any variable optional types mens we say that the value which come it can be a string or number that call unioi and we define it using | tag

Example -: let a: number | string;   --> This is called union


<<------------------------------------------------------------------------------------------------------------------------->>


2. InterSection Types
In Intersection the new object should contain both object types we created before and for using intersection we use & operator
 

Example -:
type Person = {
  name: string
}

type Employee = {
  id: number
}

type PersonEmployee = Person & Employee

let user: PersonEmployee = {
  name: "Abhay",
  id: 101
}


*/ 
//# sourceMappingURL=app..Part2.js.map