import { Link } from 'react-router-dom';

import basename from '../basename';

function Cart({items, products, setCartQuantity}) {
  const quantityHandler = index => (
    event => {
      const val = parseInt(event.target.value);
      if (val > 0) setCartQuantity(index, val);
    }
  );

  return (
    <div className="w-full">
      <h1 className="text-2xl pt-4 mb-4">Your Cart</h1>

      {items.length === 0 && (
        <p>Your cart is empty. <Link to="/store" className="text-red-500 italic hover:text-red-600">Start shopping.</Link></p>
      )}

      {items.length > 0 && (
      <table className="w-full mb-2">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          { items.map((item, index) => (
              <tr key={item.productId} className="odd:bg-gray-100">
                <td className="pl-1">#{index + 1}</td>
                <td className="flex flex-col md:flex-row items-center">
                  <img alt={products[item.productId].name} src={`${basename || ""}/images/kelli-mcclintock-GopRYASfsOc-unsplash.jpg`}
                        className="w-20 mr-1"/>
                  <span className="flex-grow">{products[item.productId].name}</span>
                  <span>${products[item.productId].price}</span>
                </td>
                <td className="text-center"><input type="number" min="1" value={item.quantity} onChange={quantityHandler(index)}/></td>
                <td className="pr-1 text-right">${item.quantity * products[item.productId].price}</td>
                <td className="text-center"><button onClick={() => setCartQuantity(index, 0)} className="text-sm">(remove)</button></td>
              </tr>
            ))
          }
          <tr className="border-t-2 border-black">
            <td colSpan="3" className="text-center text-lg font-bold">Total</td>
            <td className="pr-1 text-right text-lg font-bold">${items.reduce((acc, item) => acc + item.quantity * products[item.productId].price, 0)}</td>
          </tr>
        </tbody>
      </table>
      )}

      {items.length > 0 && (
        <div className="text-right px-4">
          <button className="px-4 py-2 bg-gray-200 border-gray-300 border-2 rounded text-gray-500" disabled="true" title="Not implemented">Checkout</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
