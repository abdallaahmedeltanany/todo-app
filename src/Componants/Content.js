import React, { useState } from 'react'
import ItemList from './ItemList';

const Content = ({items,checkedHandler,deletedHandler}) => {
  
  return (
    <>
      {items.length?(
        <ItemList 
        items={items}
        checkedHandler={checkedHandler}
        deletedHandler={deletedHandler}

        
        />
      ):(
      <p style={{color:'darkblue'}}> no  tasks for today</p>
      )
      }
      
    </>
  )
}

export default Content