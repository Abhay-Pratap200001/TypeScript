type chaiorder = { 
    type: string; 
    sugar: number; 
    strong: boolean 
};


function makeChai(order: chaiorder) {
  console.log(order);
}

function serveChai(order: chaiorder) {
  console.log(order);
}


interface  TeaRecipe {
    water: number;
    milk: number
}

class MaslaChai implements TeaRecipe{
    water = 100;
    milk = 80;
}

interface CupSize {
    size: "small" | "large"
}

class Chai implements CupSize {
    size: "small" | "large" = "large"
}


