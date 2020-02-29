import React, { useState } from "react";

function Say() {
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("red");

  const enterFunc = () => {
    setMessage("입장");
  };

  const exitFunc = () => {
    setMessage("퇴장");
  };

  const style2 = {
    backgroundcolor: "red",
    color: "aqua"
  };

  return (
    <div>
      <h3 style={{ color }}>현재상태 : {message}</h3>
      <button onClick={enterFunc}>enter</button>
      <button onClick={exitFunc}>exit</button>
      <button onClick={() => setColor("blue")}>블루</button>
      <button onClick={() => setColor("green")}>녹색</button>
      <button onClick={() => alert("111")}>이벤트</button>
    </div>
  );
}

export default Say;
