import { useState, useEffect } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    
    useEffect(() => {
        console.log(`Count updated: ${count}`);
    }, [count]);

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Counter: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increase</button>
               {count %5=== 0 && <p>🎉 You've reached 5 division click clicks!</p>}
        </div>
    );
}

export default Counter;
