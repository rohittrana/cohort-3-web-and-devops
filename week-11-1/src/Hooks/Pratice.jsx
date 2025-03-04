// import React, { useRef } from 'react';

// function Pratice() {
//   // Step 1: Create a ref to store the input element
//   const inputRef = useRef(null);

//   // Step 2: Define the function to focus the input
//   const handleFocus = () => {
//     // Access the DOM node and call the focus method
//     inputRef.current.focus();
//   };

//   return (
//     <div>
//       {/* Step 3: Attach the ref to the input element */}
//       <input ref={inputRef} type="text" placeholder="Click the button to focus me" />
//       <button onClick={handleFocus}>Focus the input</button>
//     </div>
//   );
// }

// export default Pratice;
import React, { useRef } from "react";

function Pratice() {
  const timerId = useRef(null);

  const startTimer = () => {
    timerId.current = setInterval(() => {
      console.log("Timer tick");
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerId.current);
  };

  return (
    <div>
      <button onClick={startTimer}>Start Timer</button>
      <button onClick={stopTimer}>Stop Timer</button>
    </div>
  );
}
export default Pratice