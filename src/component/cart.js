

import { useContext } from 'react';
import CartContext from '../context';


function Cart() {
  const { items, removeItem, clearCart } = useContext(CartContext);

  console.log(items);
  return(
    <div>

    </div>
  )
}

export default Cart