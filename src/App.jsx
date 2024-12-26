import React, { useState, useRef } from "react";
import "./App.css";

function App() {
  const [selectedName, setSelectedName] = useState(null);

  const names = ["Aarsh", "Krishna"];

  const buttonRefs = useRef([]);

  const handleClick = (name, index) => {
    setSelectedName(name);

    buttonRefs.current[index].focus();
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {names.map((name, index) => (
        <button
          key={name} 
          ref={(el) => (buttonRefs.current[index] = el)} 
          onClick={() => handleClick(name, index)}
          style={{ margin: "10px", padding: "10px" }}
        >
          Select {name}
        </button>
      ))}

      {selectedName && <h1>You selected {selectedName}!</h1>}
    </div>
  );
}

export default App;
