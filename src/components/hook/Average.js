import React, { useState, useMemo, useCallback } from "react";

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  const getAverage = number => {
    console.log("평균값 계산중 : " + number.length);
    if (number.length == 0) return 0;
    const sum = number.reduce((a, b) => Number(a) + Number(b));
    return sum / number.length;
  };

  const onChange = useCallback(e => {
    setNumber(e.target.value);
  }, []);
  const onInsert = useCallback(
    e => {
      const newList = list.concat(number);
      setList(newList);
      setNumber("");
    },
    [number, list]
  );
  const avg = useMemo(() => getAverage(list), [list]);
  return (
    <div>
      <ul>
        {list.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
      <input value={number} onChange={onChange}></input>
      <button onClick={onInsert}>등록</button>
      <div>{avg}</div>
    </div>
  );
};

export default Average;
