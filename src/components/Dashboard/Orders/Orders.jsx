import { Link } from "react-router-dom";
import { useGetOrdersQuery } from "../../../features/order/orderApi";
import Error from "../../ui/Error";
import Loader from "../../ui/Loader";

const Orders = () => {
  const { data, isLoading, isError, error } = useGetOrdersQuery();

  let content = null;
  if (isLoading)
    content = (
      <tr>
        <td colSpan={4}>
          <Loader />
        </td>
      </tr>
    );
  else if (!isLoading && isError) content = <Error message={error.data} />;
  else if (!isLoading && !isError && !data.length)
    content = <Error message="Nothing Found" />;
  else if (!isLoading && !isError && data.length)
    content = data.map((item) => (
      <tr key={item._id} className="border-b">
        <td className="p-4 text-center">
          {new Date(item.createdAt).toLocaleString()}
        </td>
        <td className="p-4 text-center">
          {item.cart.products.map((product) => (
            <div key={product._id}>
              <Link to={`/product/${product.product}`} className="underline">
                {product.name}
              </Link>{" "}
              x{product.quantity}
            </div>
          ))}
        </td>
        <td className="p-4 text-center">{item.amount} TK</td>
        <td className="p-4 text-center">{item.trx}</td>
        <td className="p-4 text-center">
          {item.address}, {item.city}, {item.country}
        </td>
        <td className="p-4 text-center">{item.phone}</td>
        <td className="p-4 text-center">{item.status.toUpperCase()}</td>
      </tr>
    ));

  return (
    <main>
      {/* Orders */}
      <div className="col-span-2 space-y-6">
        <div className="rounded bg-white shadow p-4">
          <h3 className="text-xl font-semibold">Orders</h3>
          <div className="relative w-full overflow-auto mt-4">
            <table className="w-full text-sm">
              <thead className="border-b">
                <tr>
                  <th className="px-4 font-medium">Date</th>
                  <th className="px-4 font-medium">Items</th>
                  <th className="px-4 font-medium">Amount</th>
                  <th className="px-4 font-medium">TRX</th>
                  <th className="px-4 font-medium">Address</th>
                  <th className="px-4 font-medium">Phone</th>
                  <th className="px-4 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>{content}</tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Orders;
