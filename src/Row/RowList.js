import React from 'react';

export default function RowList({ birdsData, setBirdId, element, birdId, setCount, count, setName, name, setClass, classes }) {
  function handleOnClick() {
    setBirdId(birdsData.id);
    if (birdId !== element.id) {
      setCount(count - 1);
    }
    if(birdId !== element.id){
      setName(false)
    }
  }
  const classLi = {
    class: (name)? classes: 'list-group-item-error',
  };

  return (
    <li id={birdsData.id} className={classLi.class} onClick={handleOnClick}>
      {birdsData.name}
    </li>
  );
}
