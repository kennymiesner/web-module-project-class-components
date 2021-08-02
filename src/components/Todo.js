import React, { useState }  from 'react';

const Item = props => {

  const handleClick = ()=> {
    props.handlecompleted(props.item.id);
  }

  return (
    <div onClick={handleClick}className={`item${props.item.completed ? ' completed' : ''}`}>
      {props.item.task}
    </div>
  );
};

export default Item;