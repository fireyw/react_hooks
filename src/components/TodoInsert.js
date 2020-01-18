import React from "react";
import { MdAdd } from "react-icons/md";
import { useState, useCallback } from "react";

const TodoInsert = () => {
  const [mode, setMode] = useState("");
  const [content, setContent] = useState("");

  const onInsertClick = () => {
    setMode("insert");
  };
  const contentOnChange = useCallback(
    e => {
      setContent(e.target.value);
    },
    [content]
  );

  const onSubmit = useCallback(e => {
    e.preventDefault();
  });
  return (
    // <form className="TodoInsert" onSubmit={onSubmit}>
    <div>
      <div>
        {mode === "insert" ? (
          <div>Add another List insert</div>
        ) : (
          <input value={content} onChange={contentOnChange} />
        )}
      </div>
      <button onClick={onInsertClick} type="submit">
        <MdAdd />
      </button>
    </div>
    // </form>
  );
};

export default TodoInsert;
