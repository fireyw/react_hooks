import React, { useState } from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "눈" },
    { id: 3, text: "달" },
    { id: 4, text: "용우" }
  ]);

  const nameList = names.map(name => {
    return (
      <li key={name.id} onDoubleClick={() => deleteId(name.id)}>
        {name.text}
      </li>
    );
  });

  const [inputText, setInputText] = useState("");
  const [newId, setNewId] = useState(5);

  const add = () => {
    const newNames = names.concat({ id: newId, text: inputText });
    setNames(newNames);
    setNewId(newId + 1);
    setInputText("");
  };

  const onChange = e => {
    setInputText(e.target.value);
  };

  const deleteId = id => {
    const newNames = names.filter(name => name.id !== id);
    setNames(newNames);
  };

  return (
    <div>
      <ul>{nameList}</ul>
      <input value={inputText} onChange={onChange}></input>
      <button onClick={add}>Add</button>
    </div>
  );
};

export default IterationSample;
