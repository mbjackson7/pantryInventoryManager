import './ListItem.css';
import React from 'react';
import ListItem from './ListItem';

function List(props) {
  //var collection = props.collection

  function getItems(collection) {
    return collection.map(function(item) {
      return <ListItem data={item}/>
    })
  };

  return (
    <div className='List'>
      {getItems(props.data)}
    </div>
  );
}

export default List;