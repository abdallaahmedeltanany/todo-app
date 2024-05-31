import React from 'react'
import LineItem from './LineItem'

const ItemList = ({ items,checkedHandler,deletedHandler }) => {
  return (
    <ul>
        {
          items.map((item) => (
           <LineItem 
           key={item.id}
           item={item}
           checkedHandler={checkedHandler}
           deletedHandler={deletedHandler}
           />
          ))
        }
            
      </ul>

  )
}

export default ItemList