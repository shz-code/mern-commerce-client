import { Link } from "react-router-dom";
import { useGetTransactionsQuery } from "../../../features/transaction/transactionApi";
import Error from "../../ui/Error";
import Loader from "../../ui/Loader";

const PaymentSummary = () => {
  const { data, isLoading, isError, error } = useGetTransactionsQuery();

  // console.log(data);

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
    content = data.slice(0, 2).map((item) => (
      <tr key={item._id} className="border-b">
        <td className="p-4 text-center">
          {new Date(item.createdAt).toLocaleString()}
        </td>
        <td className="p-4 text-center">{item.amount} TK</td>
        <td className="p-4 text-center">{item.trx}</td>
      </tr>
    ));
  return (
    <div className="rounded bg-white shadow p-4">
      <h3 className="text-xl font-semibold">Payments</h3>
      <div className="relative w-full overflow-auto">
        <table className="w-full text-sm">
          <thead className="border-b">
            <tr>
              <th className="px-4 font-medium">Date</th>
              <th className="px-4 font-medium">Amount</th>
              <th className="px-4 font-medium">TRX</th>
            </tr>
          </thead>
          <tbody>{content}</tbody>
        </table>
        <Link
          to="/dashboard/payments"
          className="inline-block pt-4 text-xs underline cursor-pointer"
        >
          View All
        </Link>
      </div>
    </div>
  );
};

export default PaymentSummary;
