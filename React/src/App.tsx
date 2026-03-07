import React from "react";
import "./App.css";
import { ChaiCard } from "./components/ChaiCard";
import { Counter } from "./components/Counter";
import type { Chai } from "./types";
import { ChaiList } from "./components/ChaiList";
import { Card } from "./components/Card";
import { OrderForm } from "./components/OrderForm";

const menu: Chai[] = [
  { id: 1, name: "Masala", price: 30 },
  { id: 2, name: "gingerElachi", price: 50 },
  { id: 3, name: "lemon", price: 30 },
];

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <ChaiCard name="Abhay" price={20} isSpecial={true} />
      <div>
        <Counter />
      </div>

      <div>
        <ChaiList items={menu} />
      </div>

      <div>
        <OrderForm  onSubmit={(order) => console.log("Placed", order.name, order.cups)}/>
      </div>

      <div>
        <Card title="Abhay title" footer={<button>Order Now</button>}/>
      </div>
    </>
  );
}

export default App;  
