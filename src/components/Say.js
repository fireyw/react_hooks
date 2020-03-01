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

  const onChange = e => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value
    };
    setForm(nextForm);
  };

  const handleClick = () => {
    alert("click");
  };

  const initiallize = () => {
    setForm({
      word: "",
      userName: ""
    });
  };

  const handleKeyChange = e => {
    if (e.key === "Enter") {
      initiallize();
    }
  };
  const [form, setForm] = useState({
    userName: "",
    word: ""
  });

  const { userName, word } = form;

  return (
    <div>
      <div>
        <h3 style={{ color }}>현재상태 : {message}</h3>
        <button onClick={enterFunc}>enter</button>
        <button onClick={exitFunc}>exit</button>
        <button onClick={() => setColor("blue")}>블루</button>
        <button onClick={() => setColor("green")}>녹색</button>
        <button onClick={handleClick}>이벤트</button>
      </div>
      <div>
        <input
          type="text"
          name="userName"
          value={userName}
          onChange={onChange}
          onKeyPress={handleKeyChange}
        ></input>

        <input
          type="text"
          name="word"
          value={word}
          onChange={onChange}
          onKeyPress={handleKeyChange}
        ></input>
        <button
          onClick={() => {
            initiallize();
          }}
        >
          초기화
        </button>
      </div>
    </div>
  );
}

export default Say;
