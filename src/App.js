import Cart from "./component/cart";
import NavBar from "./component/navBar";
import ProductList from "./component/productList";
import { CartProvider } from "./context";


function App() {
  return (
    <div className="App">
      <CartProvider>
        <NavBar/>
      <ProductList/>
      <Cart/>
    </CartProvider>
    </div>
  );
}

export default App;
