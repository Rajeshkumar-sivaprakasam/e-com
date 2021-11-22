import { React,useState,useEffect } from 'react';
import { Navbar , Products } from './components';
import { commerce } from './lib/Commerce';

const App = () => {
  const [ products ,setproducts ] = useState([]);
  const [cart, setCart] = useState({});
  
  const fetchProducts = async () =>{
    const { data } = await commerce.products.list() ;
    setproducts(data);
  }

  const fetchCart = async() =>{
    const cart = await commerce.cart.retrieve();
    setCart(cart);
  }

  const handleAddToCart = async(productId, quantity) =>{
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  }

  useEffect(()=>{
    fetchProducts();
    fetchCart();
  }, [])
  console.log(cart,'cart');

  return (
    <div>
      <Navbar totalItems={cart.total_items} />
      <Products products={ products } onAddToCart={handleAddToCart} />
    </div>
  )
}
export default App;