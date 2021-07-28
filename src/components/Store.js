import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Cart from './Cart';

import basename from '../basename';

function Store({products, cart, addToCart, setCartQuantity}) {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/cart`}>
        <Cart items={cart} products={products} setCartQuantity={setCartQuantity}/>
      </Route>
      <Route path={`${path}`}>
        <div>
          <h1 className="text-2xl text-center mb-2">Our products</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            { products.map((p, i) => (
              <div key={i}>
                <img alt={p.name} src={`${basename || ""}/images/kelli-mcclintock-GopRYASfsOc-unsplash.jpg`}></img>
                <h2 className="text-xl">{p.name}</h2>
                <div className="flex items-center">
                  <span className="mr-auto text-lg bg-gray-700 text-gray-100 px-1 rounded">${p.price}</span>
                  <button className="border-2 border-orange-600 rounded text-orange-600 hover:border-orange-500 hover:text-orange-500 px-4 py-2"
                          onClick={() => addToCart(i)}>
                    Add to cart
                  </button>
                </div>
              </div>
            )) }
          </div>
        </div>
      </Route>
    </Switch>
  );
}

export default Store;
