import { useState } from "react";

function Bulb() {
  const [isOn, setIsOn] = useState(false); // State for bulb on/off

  const toggleBulb = () => {
    setIsOn(!isOn); // Toggle state
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {/* Bulb Image */}
      <div
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          backgroundColor: isOn ? "yellow" : "gray",
          margin: "auto",
        }}
      ></div>

      {/* Button to Toggle Bulb */}
      <button
        onClick={toggleBulb}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        {isOn ? "Turn Off" : "Turn On"}
      </button>
    </div>
  );
}

export default Bulb;
