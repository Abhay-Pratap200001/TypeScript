function getChai(kind: string | number) {
  if (typeof kind === "string") {
    return `Making ${kind} chai...`;
  }
  return `chai order: ${kind}`;
}

//Exostive check
function serveChai(ms?: string) {
  if (ms) {
    return `Serving ${ms}`;
  }

  return `Serving default masal chai`;
}

function orderChai(size: "medium" | "small" | "large" | number) {
  if (size === "small") {
    return `small chai...`;
  }

  if (size === "medium" || size === "large") {
    return `small chai...`;
  }

  return `small chai... ${size}`;
}

//Guard checking

class KulhadChai {
  serve() {
    return `Serving kulhad chai`;
  }
}

class CuttingChai {
  serve() {
    return `Serving kulhad chai`;
  }
}

function serve(chai: KulhadChai | CuttingChai) {
  if (chai instanceof KulhadChai) {
    return chai.serve();
  }
}

type chaiOrder = {
  type: string;
  sugar: number;
};

function isChaiOrder(obj: any): obj is chaiOrder {
  return (
    typeof obj === "object" &&
    obj !== "null" &&
    typeof obj.type === "string" &&
    typeof obj.sugar === "number"
  );
}

function serveOrder(item: chaiOrder | string) {
  if (isChaiOrder(item)) {
    return `serving ${item.type} chai with ${item.sugar}`;
  }
  return `serving custom chai: ${item}`;
}

type MasalaChai = { type: "masala"; spiceLevel: number };
type GingerChai = { type: "ginger"; amount: number };
type ElachiChai = { type: "elachi"; aroma: number };

type chai = MasalaChai | GingerChai | ElachiChai;

function Chaii(order: chai) {
  switch (order.type) {
    case "elachi":
      return `Elachi Chai`;
      break;

    case "ginger":
      return `Ginger Chai`;
      break;
  }
}

function brew(order: MasalaChai | GingerChai | ElachiChai) {
    if ("spiceLevel" in order) {
        return order   
    }
}


function isSAtringArray(arr:unknown){
    return ['1', '2', '3']
}