import { Switch, Route, useRouteMatch } from 'react-router-dom';

function Store({products, addToCart}) {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/cart`}>
        <div>
          <h1>Cart</h1>
        </div>
      </Route>
      <Route path={`${path}`}>
        <div>
          <h1>Store</h1>
          <div className="grid grid-cols-3 gap-8">
            { products.map((p, i) => (
              <div key={i}>
                <img alt={p.name} src="/images/kelli-mcclintock-GopRYASfsOc-unsplash.jpg"></img>
                <h2 className="text-xl">{p.name}</h2>
                <div className="flex items-center">
                  <span className="mr-auto text-lg">${p.price}</span>
                  <button className="border-2 border-red-500 rounded text-red-700 px-4 py-2"
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
