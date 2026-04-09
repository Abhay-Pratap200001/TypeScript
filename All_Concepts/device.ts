 /*
1. Class
 a class is a blueprint or template used to create objects that share similar properties and behaviors. 

 Example -:
 class Device{
    name = 'lg';
    price = 12000;
    category = 'digital'
  }

 let d1 =  new Device()
 let d2 =  new Device()
console.log(d1)



2. Constructor
In JavaScript classes, a constructor is a special method used for creating and initializing an object instance of that class. It is automatically executed when you create a new instance using the new keyword. 

Example -:
class BottleMaker {
  constructor(public name:string, public price:number){}
}

let b1 = new BottleMaker("Milton", 1200)
console.log(b1);



4.  Public & Private Access Modifire
Public -: In JavaScript, "public" refers to class members (properties and methods) that can be accessed and changes from anywhere—both inside the class and from outside instances and also fron inside of any method which is under that class

Example -:
class BottleMaker{
constructor(public name: string){}
}

let b1 = new BottleMaker("Milton")
b1.name = "Plastic"
console.log(b1);
Output will be 'Plastic'

Private-: private class members are defined using the hash # prefix. This syntax creates a "hard" privacy barrier, meaning these elements cannot be accessed, modified, or even detected from outside the class that defines them. 



5. Protected Access Modifier
Protected class values can be access in there own class and those class which are extend other class but can access or modify out of class which is not there own class and which is not extend



6. Optional Properties readonly
When we use readonly we can't reasine or update any values which, we create from constructor 


7. Parameter Properties
When we declare function and variable all under the parameter of constructor and we dont write parameter and function we dont use this.name  etc that was what called parameter property


8. Getter & Setter
getter and setter are normal function of classes with tyhe help of getter we can get the class value and with the setter we can set the new value intio the class which is given by user in javascript

9. Static Members
With the help of static key word we can use any method of value of class without making it instant we dont have to use new keyworld to use that value or method of any class


10. Abstraction Classes

*/

class BottleMaker{
 protected name = 'milton'
}

class MatalBottleMaker extends BottleMaker{
  public material = 'metle'
  getname(){
    this.name
  }
}

console.log(new MatalBottleMaker());



