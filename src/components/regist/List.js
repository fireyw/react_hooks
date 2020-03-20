import React from "react";
import ListItem from "./ListItem";

const List = ({ writeList }) => {
  return (
    <>
      <table border="1">
        <tr align="center">
          <td width="50">no</td>
          <td width="300">title</td>
          <td witdh="100">Name</td>
          <td witth="100">Date</td>
        </tr>
        {writeList.map(row => (
          <ListItem key={row.no} row={row} />
        ))}
      </table>
    </>
  );
};

export default List;
