import React from "react";
import { MdAdd, MdRemoveCircleOutline } from "react-icons/md";
import { useState, useCallback } from "react";

const TodoInsert = ({ onInsert, onRemove }) => {
  const [mode, setMode] = useState("");
  const [content, setContent] = useState("");

  const contentOnChange = useCallback(
    e => {
      setContent(e.target.value);
      console.log("content", content);
    },
    [content]
  );

  const addClick = useCallback(
    e => {
      console.log("add button click");
      content !== "" && onInsert(content);
      setContent("");
      e.preventDefault();
    },
    [onInsert, content]
  );
  const removeClick = () => {
    onRemove(2);
  };
  return (
    <>
      <div>
        {mode === "insert" ? (
          <div>Add another List insert</div>
        ) : (
          <div>
            <input value={content} onChange={contentOnChange} />
          </div>
        )}
      </div>
      <button type="submit" onClick={addClick}>
        <MdAdd />
      </button>
      <button type="submit" onClick={removeClick}>
        <MdRemoveCircleOutline />
      </button>
    </>
  );
};

export default TodoInsert;
