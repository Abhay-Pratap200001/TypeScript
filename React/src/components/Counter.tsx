import { useState } from "react"

 export function Counter() {
    const [count, setcount] = useState<number>(0)
    return(
        <div>
            <p>Cups order: {count}</p>
            <button onClick={() => setcount((countt) => countt+1)}>Order more</button>
        </div>
    )
} 