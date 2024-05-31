import React from 'react'

const LineItem = ({ item,checkedHandler,deletedHandler, }) => {
  return (
    <li className='item' key={item.id}>
    <input 
    type="checkbox"
    checked={item.checked}
    onChange={()=>checkedHandler(item.id)}

    />
    <label> {item.item} </label>
    <button className='delete-btn' onClick={()=>deletedHandler(item.id)}>x</button>

  </li>
  )
}

export default LineItem