import { useState } from 'react';
import Header from './Component/Header.jsx';
import Banner from './Component/Banner.jsx';
import Product from './Component/Product.jsx';
import Footer from './Component/Footer.jsx';
import './App.css'

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (productId) => {
    if (!cart.includes(productId)) {
      setCart([...cart, productId]);
    }
  };

  return (
    <>
      <Header cart={cart} />
      <Banner />
      <Product cart={cart} addToCart={addToCart} />
      <Footer />
    </>
  )
}

export default App
