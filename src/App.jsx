import { useState } from 'react'
import './App.css'
import { Link } from "react-router";
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import { Routes, Route } from 'react-router';

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(id, count, title, image, price) {
    if (cart.find(item => item.id == id)) {
      const newCart = cart.map(item => {
        if (item.id == id) {
          return (
            {...item, count: item.count + count}
          )
        }
        return item;
      })
      setCart(newCart);
    } else {
      const newCart = [...cart, {id: id, title: title, image: image, price: price, count: count}]
      setCart(newCart);
    }
    if (title) {
      alert('Item added to cart!');
    }
  }

  function removeFromCart(id) {
    const newCart = cart.filter(item => item.id != id);
    setCart(newCart);
  }

  const total = cart.reduce((total, item) => total + item.count, 0);

  return (
    <div id="main">
      <div id="navbar">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart ({total})</Link>
      </div>
      <div id="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
