import './ListItem.css';
import React from 'react';
import ListItem from './ListItem';

function List(props) {
  //var collection = props.collection

  var collection = [
    { "image": "https://nutritionix-api.s3.amazonaws.com/60a3c7bf14d0250009048bd6.jpeg" },
    { "image": "https://nutritionix-api.s3.amazonaws.com/613e067e8b5bbf0006094d19.jpeg" },
    { "image": "https://nutritionix-api.s3.amazonaws.com/60a3c7bf14d0250009048bd6.jpeg" },
    { "image": "https://nutritionix-api.s3.amazonaws.com/613e067e8b5bbf0006094d19.jpeg" },
  ]


  function getItems() {
    return collection.map(function(item) {
      return <ListItem data={item}/>
    })
  };

  return (
    <div className='List'>
      {getItems()}
    </div>
  );
}

export default List;