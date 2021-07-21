import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Store from './Store';

import products from '../data';

export default function App() {
  return (
    <Router>
      <div>
        <div className="max-w-screen-2xl mx-auto px-2 py-1">
          <div className="bg-yellow-200 p-2 rounded flex">
            <Link to="/" className="mr-auto px-4 py-2">Home</Link>
            <Link to="/store" className="mr-2 px-4 py-2">Store</Link>
            <Link to="/store/cart" className="bg-yellow-500 rounded text-gray-100 px-4 py-2">Cart</Link>
          </div>
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto px-4">
        <Switch>
          <Route path="/store">
            <Store products={products}/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
