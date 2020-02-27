import React, { useState } from "react";

function Say() {
  const [message, setMessage] = useState("");

  const enterFunc = () => {
    setMessage("입장");
  };

  const exitFunc = () => {
    setMessage("퇴장");
  };

  return (
    <div>
      <h3>현재상태 : {message}</h3>
      <button onClick={enterFunc}>enter</button>
      <button onClick={exitFunc}>exit</button>
    </div>
  );
}

export default Say;
