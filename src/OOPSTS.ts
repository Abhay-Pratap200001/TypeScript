// class Chai {
//     flavour:string;
//     price:number

//     // constructor(flavour: string, price:number){
//     //     this.flavour = flavour
//     //     this.price = price
//     // }
//       constructor(flavour: string){
//         this.flavour = flavour
//         console.log(this);
        
//     }
// }

// const msalaChai = new Chai("Ginger", 20)

// msalaChai.flavour = "masala"


class Chai {
    public flavour: string = "Masala Chai"
    privatesecretIngredients = "Cardamon"
    reveal(){
        return this.privatesecretIngredients
    }
}

class shop{
    protected shopName = "Chai corner"

}


class Branch extends shop{
    getName(){
        return this.shopName
    }
}

new Branch().getName


class Qalet{
    #balance = 200000000000000
}





