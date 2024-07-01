import { useContext, useState } from 'react';
import CartContext from '../context';


function ProductList() {
  const { addItem } = useContext(CartContext);
  const [prod , setProd] = useState([{id:1 , title:"prod1"},{id:2 , title:"prod2"}])
  const addToCart = (product) => {
    addItem(product);
  };

 return(
    <div>
     {prod.map((item,index)=>{
        return <div style={{border:"1px solid red"}} key={index}>
                <h1> {item.title}</h1>
                <button onClick={()=>addToCart(item)}>add</button>
               </div>
     })}
    </div>
 )
}

export default ProductList
