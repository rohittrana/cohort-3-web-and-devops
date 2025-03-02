import { useRef } from "react";

function Nma() {
  const inputRef = useRef();
  function forcusOnInput() {

    ref.current.focus();
 
    document.getElementById("name").focus();
  }
  return (
    <div>
      <form>
        <input ref ={inputRef} id="name" type="text" placeholder="name" />
        <input id="password" type="text" placeholder="password" />

        <button onClick={forcusOnInput}>submit</button>
      </form>
    </div>
  );
}
export default Nma;
