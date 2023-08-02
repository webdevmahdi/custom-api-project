import React, { useEffect, useState } from 'react'
import User from './Shoe';

function Shoes() {
  // let products = [
  // {name: 'nikee', id: 1, price: 1200},
  // {name: 'puma', id: 2, price: 1100},
  // {name: 'adidas', id: 3, price: 1300},
  // {name: 'apex', id: 4, price: 100}
  // ]
  // let [users, setUsers] = useState([])
  // useEffect(()=>{
  //   fetch('data.json')
  //   .then(res => res.json())
  //   .then(data => setUsers(data))
  // },[])
  let [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('data.json')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  return (
    <div>
      {/* {
        users.map(user => <Shoe singleUser={user} key={user._id}></Shoe>)
      } */}
      {
        users.map(user => <User singleUser={user}></User>)
      }
    </div>
  )
}

export default Shoes;