import { React,useState,useEffect } from 'react'
import { Navbar , Products } from './components'
import { commerce } from './lib/Commerce'

const App = () => {
  const [ products ,setproducts ] = useState([]);
  
  const fetchProducts = async () =>{
    const { data } = await commerce.products.list() ;
    setproducts(data);
  }

  useEffect(()=>{
    fetchProducts();
  }, [])

  return (
    <div>
      <Products products={ products }/>
      <Navbar />
    </div>
  )
}
export default App;