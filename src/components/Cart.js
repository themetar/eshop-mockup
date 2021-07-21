import { Link } from 'react-router-dom';

function Cart({items, products}) {
  return (
    <div>
      <h1 className="text-2xl pt-4 mb-4">Your Cart</h1>

      {items.length === 0 && (
        <p>Your cart is empty. <Link to="/store">Start shopping.</Link></p>
      )}

      {items.length > 0 && (
      <table className="w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          { items.map((item, index) => (
              <tr key={index} className="odd:bg-gray-100">
                <td className="pl-1">#{index + 1}</td>
                <td className="flex items-center">
                  <img alt={products[item.productId].name} src="/images/kelli-mcclintock-GopRYASfsOc-unsplash.jpg"
                        className="w-20 mr-1"/>
                  <span className="flex-grow">{products[item.productId].name}</span>
                  <span>${products[item.productId].price}</span>
                </td>
                <td className="text-center"><input type="number" value={item.quantity}/></td>
                <td className="pr-1 text-right">${item.quantity * products[item.productId].price}</td>
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
    </div>
  );
}

export default Cart;
