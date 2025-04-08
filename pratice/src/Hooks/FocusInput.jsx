import React, { useRef, useEffect } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
    
  }, []);
  return (
    <>
      <input type="text" ref={inputRef} placeholder="type something.... " />
    
    </>
  );
}

export default FocusInput;
