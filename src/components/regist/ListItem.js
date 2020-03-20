import React from "react";

const ListItem = ({ row }) => {
  const { no, title, content, date } = row;
  return (
    <>
      <tr>
        <td>{no}</td>
        <td>{title}</td>
        <td>{content}</td>
        <td>{date.toLocaleDateString("ko-KR")}</td>
      </tr>
    </>
  );
};

export default ListItem;
