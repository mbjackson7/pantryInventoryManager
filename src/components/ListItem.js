import './ListItem.css';
import React from 'react';

function ListItem(props) {
  var data = props.data
  console.log(data)

  return (
    <div className='ListItem'>
      <div className='Background'>
        <div className='ThumbnailBox'>
          <img src={data.img_url} alt="" className='Thumbnail'/>
        </div>
      </div>
      <p className='DataItem'>{data.brand_name}<br/>{data.food_name}</p>
      <p className='QuantityBox'>{data.quantity}x</p>
      <p className='DataItem'>{data.notes}</p>

    </div>
  );
}

export default ListItem;