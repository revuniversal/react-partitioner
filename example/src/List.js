import React from "react";

const List = ({items, onItemClick, style}) => (
  <div style={style}>
    { items.map(item => (
      <div key={item.key} onClick={() => onItemClick(item)}>
        {item.value}
      </div>
    ))}
  </div>
);

export default List;