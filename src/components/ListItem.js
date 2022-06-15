import './ListItem.css';
import React from 'react';

function ListItem(props) {
  var data = props.data

  return (
    <div className='ListItem'>
      <div className='ThumbnailBox'>
        <img src={data.image} alt="" className='Thumbnail'/>
      </div>
      <p>Test</p>

    </div>
  );
}

export default ListItem;