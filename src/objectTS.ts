//This is way how we define types in object and use those valuse

const chai = {
    name: "Masala chai",
    price: 20,
    isHot: true
}


 
let tea: {
    name: string;
    price: number;
    isHot: boolean
}


tea = {
    name: "Ginger Tea",
    price: 20,
    isHot: true
}



type Tea = {
    name: string;
    price: number; 
    ingredients:string[]
} 


const adrakChai: Tea = {
    name: "Adrak Chai",
    price: 25,
    ingredients: ['ginger', "Elachi", "tea leaves"]
}


///

type Cup = {size: string};
let smallCup: Cup = {size: "200ml"}

let bigCup = {size: "500ml", material: "steel"}
smallCup = bigCup




type Brew = {brewTime: number}
const coffe = {brewTime: 5, beans: "Arabica"}
const chaiBrew: Brew = coffe

type User = {
    username: string,
    password: string,
    email: string
}

const u: User = {
    username: "chai code",
    password: "123",
    email: "hijsbx@gmail.com"
}


type Item = {name: string, qunatity: number}
type Address = {street: string, pin: number}

type Order = {
    id: string,
    items: Item[],
    address: Address
} 


//this is called parscling the datatype

type Chai = {
   name: string;
   price: number;
   isHot: boolean 
}

const updatedChai = (updates: Partial<Chai>) => {
    console.log("updating chai with", updates);    
}


updatedChai({price: 25})
updatedChai({isHot: false})
updatedChai({})


//this is called required datatype


type ChaiOrder = {
    name?:string;
    quatity?:number, 
}

const placeOrder = (order: Required<ChaiOrder>) => {
    console.log(order);
}

placeOrder({
    name: "coffe",
    quatity:2
})




// 

type chai = {
    name: string,
    price: number,
    isHot: boolean,
    incredients: string[]
}

type BasicChaiInfo = Pick<chai, "name" | "price">;

const chaiInfo: BasicChaiInfo = {
    name: 'lemin tea',
    price: 20
}


type ChaiNewm={
    name: string,
    price: number,
    isHot: boolean,
    secretincredients: string
}

type PublicChai = Omit<Chai, "secretincredients">;
