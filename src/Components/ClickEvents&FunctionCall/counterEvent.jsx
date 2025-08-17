// changing component state on click 
import React , { useState } from "react";
function Counter() {
    const [count , setCount] = useState(0);

    return (
        <div>
            <button onClick = {() => setCount(count + 1 )}> Increment </button>
            <button onClick = {() => setCount(count - 1 )}> Decrement </button>
            <p> Count: {count}</p>
        </div>
    );
};
export default Counter ; 
