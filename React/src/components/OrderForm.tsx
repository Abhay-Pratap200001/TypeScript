import React, { useState } from "react";

interface OrderFormProps {
  onSubmit(order: { name: string; cups: number }): void;
}

export function OrderForm({ onSubmit }: OrderFormProps) {
  const [name, setname] = useState<string>("Masala");
  const [cups, setcups] = useState<number>(1);

  function handleSubmit(e:React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    onSubmit({name, cups}) 
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setname(e.target.value)
        }
        value={name}
      />

      <label>Cups</label>
      <input
        value={cups}
        type="number"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setname((e.target.value))
        }
      />
      <button type="submit">Place Ordrer</button>
    </form>
  );
}
