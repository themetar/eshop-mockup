import { Switch, Route, useRouteMatch } from 'react-router-dom';

function Store() {
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
        </div>
      </Route>
    </Switch>
  );
}

export default Store;
