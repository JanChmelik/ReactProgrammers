import React from "react";
import "./List.css";
//
const List = ({ inList, handleDelete }) => {
  const onClickDelete = (e) => {
    return handleDelete(e);
  };
  return (
    <div className="ul">
      {inList.map((coder) => (
        <div className="li" key={coder.id}>
          {coder.name} - {coder.position}
          <button onClick={() => onClickDelete(coder.id)}>X</button>
        </div>
      ))}
    </div>
  );
};

export default List;
