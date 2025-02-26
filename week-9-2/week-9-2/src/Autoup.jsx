import { useState, useEffect } from "react";

function AutoUp() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Auto Counter: {count}</h1>
    </div>
  );
}

export default AutoUp;
