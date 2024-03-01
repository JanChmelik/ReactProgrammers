import React from "react";
import "./List.css";
//
const List = ({ inList, handleDelete }) => {
  const onClickDelete = (e) => {
    return handleDelete(e);
  };
  return (
    <ul>
      {inList.map((coder) => (
        <li key={coder.id}>
          {coder.name} - {coder.position}
          <button onClick={() => onClickDelete(coder.id)}>X</button>
        </li>
      ))}
    </ul>
  );
};

export default List;
