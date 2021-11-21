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
    const response = await commerce.cart.add(productId, quantity);
  }

  useEffect(()=>{
    fetchProducts();
    fetchCart();
  }, [])
  console.log(cart,'cart');

  return (
    <div>
      <Navbar />
      <Products products={ products } onAddToCart={handleAddToCart} />
    </div>
  )
}
export default App;