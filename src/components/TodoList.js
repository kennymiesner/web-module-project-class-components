import React from "react";

import Todo from "./Todo";

const TodoList = props => {
  const handleClick = ()=> {
    props.handleClear();
  }

  return (
    <div className="shopping-list">
      {props.todos.map(item => (
        <Todo handlecompleted={props.handlecompleted} key={item.id} item={item} />
      ))}
      <button onClick={handleClick} className="clear-btn">
        Clear Completed
      </button>
    </div>
  );
};

export default TodoList;