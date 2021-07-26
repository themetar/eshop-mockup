import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './Home';
import Store from './Store';

import products from '../data';

export default function App() {
  const [cart, setCart] = useState([]);

  const cartSize = cart.reduce((acc, item) => acc + item.quantity, 0);

  const addToCart = id => {
     setCart(prevCart => {
      const cartItemIndex = prevCart.findIndex(cartItem => cartItem.productId === id);

      if (cartItemIndex !== -1) {
        const cartItem = prevCart[cartItemIndex];
        const cart = prevCart.slice();
        cart[cartItemIndex] = {...cartItem, quantity: cartItem.quantity + 1}

        return cart;
      } else {
        return prevCart.concat({productId: id, quantity: 1});
      }
     });
  };

  const setCartQuantity = (index, quantity) => {
    setCart(prevCart => {
      if (quantity === 0) {
        return prevCart.filter((_, i) => i !== index);
      } else {
        const cartItem = prevCart[index];
        const cart = prevCart.slice();
        cart[index] = {...cartItem, quantity: quantity};
        return cart;
      }
    });
  };

  return (
    <div className="min-h-screen max-w-screen-2xl mx-auto px-2 py-1 flex flex-col">
      <Router>
        <div className="bg-yellow-200 p-2 mb-2 rounded flex">
          <Link to="/" className="mr-auto px-4 py-2">Home</Link>
          <Link to="/store" className="mr-2 px-4 py-2">Store</Link>
          <Link to="/store/cart" className="bg-yellow-500 rounded text-gray-100 px-4 py-2">Cart {cartSize > 0 && `(${cartSize})`}</Link>
        </div>
        <div className="px-4 mb-4 flex-grow">
          <Switch>
            <Route path="/store">
              <Store products={products} cart={cart} addToCart={addToCart} setCartQuantity={setCartQuantity}/>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        <footer>
          <div className="bg-black text-white px-2 py-2 rounded grid grid-cols-3">
            <div className="px-4 border-r-2 border-gray-600">Brought to you by <a href="https://github.com/themetar">themetar</a>, <a href="https://reactjs.org/">React</a>, and <a href="https://reactrouter.com/">React Router</a>.</div>
            <div className="px-4 border-r-2 border-gray-600">Contact us at <a>e-shop@example.org</a>.</div>
            <div className="px-4">
              <nav>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/store">Store</Link></li>
                </ul>
              </nav>
            </div>
          </div>
        </footer>
      </Router>
    </div>
  );
}
