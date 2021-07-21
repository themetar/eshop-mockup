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
    <Router>
      <div>
        <div className="max-w-screen-2xl mx-auto px-2 py-1">
          <div className="bg-yellow-200 p-2 rounded flex">
            <Link to="/" className="mr-auto px-4 py-2">Home</Link>
            <Link to="/store" className="mr-2 px-4 py-2">Store</Link>
            <Link to="/store/cart" className="bg-yellow-500 rounded text-gray-100 px-4 py-2">Cart {cartSize > 0 && `(${cartSize})`}</Link>
          </div>
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto px-4">
        <Switch>
          <Route path="/store">
            <Store products={products} cart={cart} addToCart={addToCart} setCartQuantity={setCartQuantity}/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
