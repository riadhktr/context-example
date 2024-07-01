import React, { useContext } from 'react'
import CartContext from '../context'

const NavBar = () => {
    const {items} = useContext(CartContext)
    console.log(items);
  return (
    <div>{items.length}</div>
  )
}

export default NavBar