import { useSearchParams } from "react-router-dom";
import { useGetOrderQuery } from "../../features/order/orderApi";
import { useGetTrxQuery } from "../../features/transaction/transactionApi";
import Error from "../ui/Error";
import Loader from "../ui/Loader";

const Success = () => {
  // http://localhost:5173/success/?order=65d8623f15652dd03163d41c&trx=65d8623f15652dd03163d41d
  const [searchParams] = useSearchParams();

  const p_order = searchParams.get("order");
  const p_trx = searchParams.get("trx");

  const { data: order, isLoading, isError, error } = useGetOrderQuery(p_order);
  const { data: trx } = useGetTrxQuery(p_trx);

  let content = null;
  if (isLoading) content = <Loader />;
  else if (!isLoading && isError) content = <Error message={error.data} />;
  else if (!isLoading && !isError)
    content = (
      <div>
        <p className="border-b py-2 flex justify-between items-center">
          Transaction Id:{" "}
          <span className="font-bold tracking-tighter">{trx.trx}</span>
        </p>
        <p className="border-b py-2 flex justify-between items-center">
          Date:{" "}
          <span className="font-bold tracking-tighter">
            {new Date(trx.createdAt).toLocaleString()}
          </span>
        </p>
        <p className="border-b py-2 flex justify-between items-center">
          Method:{" "}
          <span className="font-bold tracking-tighter">{trx.card_issuer}</span>
        </p>
        <p className="border-b py-2 flex justify-between items-center">
          Amount:{" "}
          <span className="font-bold tracking-tighter">
            {trx.amount} {trx.currency}
          </span>
        </p>
        {order.coupon && (
          <p className="border-b py-2 flex justify-between items-center">
            Coupon:{" "}
            <span className="font-bold tracking-tighter">
              {order.coupon.name} ({order.coupon.description.substr(0, 10)}...)
            </span>
          </p>
        )}
        <p className="border-b py-2 flex justify-between items-center">
          Products:{" "}
          <span className="font-bold tracking-tighter text-right">
            {order.cart.products.map(
              (item) => `(${item.name} x ${item.quantity})`
            )}
          </span>
        </p>
        <p className="border-b py-2 flex justify-between items-center">
          Address:{" "}
          <span className="font-bold tracking-tighter text-right">
            {order.address}, {order.city}, {order.country}
          </span>
        </p>
      </div>
    );

  return (
    <div>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Your Order Has Been Confirmed
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Thanks for shopping with us.
              </p>
            </div>
            <div className="max-w-[400px] bg-slate-100 rounded p-4 w-full">
              {content}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Success;
