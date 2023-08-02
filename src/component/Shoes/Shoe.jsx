import React from 'react'
import { addToDb, removeItem } from '../../utilities/storagebd';

function Shoe(props) {
  let {name, _id, age} = props.singleUser;
  let addCart = (id) => {
    addToDb(id)
  }
  let removeCart = (id) => {
    removeItem(id);
  }
  return (
    <div>
      <h1>Name: {name}</h1>
      <h2>Price: {age}</h2>
      <h3>ID: {_id}</h3>
      <button onClick={()=> addCart(_id)}>Add to cart</button>
      <button onClick={()=> removeCart(_id)}>Parchase</button>
    </div>
  )
}

export default Shoe