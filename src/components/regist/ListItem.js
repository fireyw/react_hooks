import React from "react";

const ListItem = ({ history, row }) => {
  const { no, title, content, date } = row;
  const modify = () => {
    // console.log("modify click");
    history.push("/modify/" + no);
  };
  return (
    <>
      <tr>
        <td>{no}</td>
        <td>{title}</td>
        <td>{content}</td>
        <td>{date.toLocaleDateString("ko-KR")}</td>
        <td>
          <button onClick={modify}>수정</button>
          <button>삭제</button>
        </td>
      </tr>
    </>
  );
};

export default ListItem;
