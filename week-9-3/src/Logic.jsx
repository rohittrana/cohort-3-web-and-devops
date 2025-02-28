import { useState } from "react";

function Logic() {
  const { message, SetMessage } = useState(true);
  function toogle(){
               SetMessage(!message);
  }
  return <>
    <button onClick={toogle}>

    </button>
    {!message && <p>This message is condition rendered !</p>}
  </>;
}
export default Logic;
