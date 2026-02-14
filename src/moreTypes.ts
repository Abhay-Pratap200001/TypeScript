//Type assertion we define the type force fully that belive me its type of whatever it is ex..

let respoonse: any = "42";
let numericLength: number = (respoonse as string).length;

type Books = {
  name: string;
};



let booksString = '{"name": "the last of us"}';
let bookObject = JSON.parse(booksString) as Books;
console.log(bookObject);

const inputElemebt = document.getElementById("username") as HTMLInputElement;



let value: any;
value = "chai";
value = [1, 2, 3, 4, 5, 6, 7];
value = 2.0;
value.toUpperCase();



let newvalue: unknown;
newvalue = "chai";
newvalue = [1, 2, 3, 4, 5, 6, 7];
newvalue = 2.0;

if (typeof newvalue === "string") {
  newvalue.toUpperCase();
}



try {
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  }
  console.log(error);
}



const data:unknown = "chai aur code"
const strData: string = data as string
console.log(strData);



type Rolee = "admin" | "user"

function redirectBasedRole(Role:Rolee): void {
    if (Role === "admin") {
        console.log("Redirecting to admin dashboard");
        return
    }

      if (Role === "user") {
        console.log("Redirecting to user dashboard");
        return
    }
    Role;
}

function neverReturn():never{
    while(true){}
}