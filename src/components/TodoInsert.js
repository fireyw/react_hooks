import React from "react";
import { MdAdd } from "react-icons/md";
import { useState, useCallback } from "react";

const TodoInsert = ({ onInsert }) => {
  const [mode, setMode] = useState("");
  const [content, setContent] = useState("");

  const contentOnChange = useCallback(
    e => {
      setContent(e.target.value);
      console.log("content", content);
    },
    [content]
  );

  const onSubmit = useCallback(
    e => {
      content != "" && onInsert(content);
      setContent("");
      e.preventDefault();
    },
    [onInsert, content]
  );
  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <div>
        {mode === "insert" ? (
          <div>Add another List insert</div>
        ) : (
          <div>
            <input value={content} onChange={contentOnChange} />
          </div>
        )}
      </div>
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
