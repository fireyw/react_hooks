import React from "react";
import { MdAdd } from "react-icons/md";
import { useState } from "react";

const TodoInsert = () => {
  const [mode, setMode] = useState("");

  const onInsertClick = () => {
    console.log("btn click");
    setMode("insert");
  };
  const onSubmit = () => {};
  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <div>
        {mode === "insert" ? (
          <div>Add another List insert</div>
        ) : (
          <div>Add another List</div>
        )}
      </div>
      <button onClick={onInsertClick} type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
