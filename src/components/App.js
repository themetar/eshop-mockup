import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './Home';
import Store from './Store';

import products from '../data';

import basename from '../basename';

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
    <div className="min-h-screen max-w-screen-2xl mx-auto px-2 pb-1 flex flex-col text-gray-900">
      <Router basename={basename}>
        <div className="bg-white pt-1 sticky top-0 mb-2">
          <nav className="bg-yellow-200 p-2 rounded flex">
            <Link to="/" className="mr-auto px-4 py-2">Home</Link>
            <Link to="/store" className="mr-2 px-4 py-2 text-red-500 hover:text-red-600">Store</Link>
            <Link to="/store/cart" className="bg-orange-600 hover:bg-orange-500 rounded text-gray-100 px-4 py-2">Cart {cartSize > 0 && `(${cartSize})`}</Link>
          </nav>
        </div>
        <div className="px-4 mb-2 flex-grow flex">
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
          <div className="bg-gray-900 text-white px-2 py-2 rounded md:grid grid-cols-3">
            <div className="px-4 py-1 md:border-r-2 border-gray-600">
              Brought to you by <a href="https://github.com/themetar" className="hover-link">themetar</a>, <a href="https://reactjs.org/" className="hover-link">React</a>, and <a href="https://reactrouter.com/" className="hover-link">React Router</a>.
            </div>
            <div className="px-4 py-1 md:border-r-2 border-gray-600">Contact us at <a href="" className="hover-link">e-shop@example.org</a>.</div>
            <div className="px-4 py-1">
              <nav className="border-gray-600 border-t-2 md:border-t-0">
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
