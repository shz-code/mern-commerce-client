import { Formik } from "formik";
import { TicketCheck } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useGetCartQuery } from "../../features/cart/cartApi";
import { useCheckMutation } from "../../features/coupon/couponApi";
import Button from "../ui/Button";
import Error from "../ui/Error";
import Input from "../ui/Input";
import Loader from "../ui/Loader";
import OrderItemCard from "./OrderItemCard";

const validate = (values) => {
  const errors = {};
  if (!values.couponName) {
    errors.couponName = "Coupon missing";
  }
  if (values.couponName.includes(" ")) {
    errors.couponName = "Can not contain (space) in name";
  }
  return errors;
};

const OrderSummary = ({ coupon, setCoupon }) => {
  const [cartProducts, setCartProducts] = useState([]); // All the product ids that are in cart
  const [dataSet, setDataSet] = useState(false); // Set to true once the products array is set

  const { data, isError, isLoading, error } = useGetCartQuery();
  const [check] = useCheckMutation();

  const initCartProducts = useCallback(() => {
    if (!isError && !isLoading && dataSet && data.price) {
      data.products.map((item) => {
        if (!cartProducts.includes(item.product)) {
          setCartProducts((prev) => [...prev, item.product]);
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, isError, data, dataSet]);

  useEffect(() => {
    initCartProducts();
    setDataSet(true);
  }, [initCartProducts]);

  let content = null;
  if (isLoading) content = <Loader />;
  else if (!isLoading && isError) content = <Error message={error.data} />;
  else if (!isLoading && !isError && !data.price)
    content = <Error message="Nothing in Cart" />;
  else if (!isLoading && !isError && data.price)
    content = data.products.map((item) => (
      <OrderItemCard key={item._id} product={item} />
    ));

  return (
    <div className="sticky top-2">
      <h4 className="font-semibold text-lg hidden md:block">Your Order</h4>
      <div className="border rounded shadow mt-4">
        {/* Header */}
        <div className="flex justify-between border-b p-4 font-semibold">
          <p>Product</p>
          <p>Subtotal</p>
        </div>
        {/* Items Container */}
        <div>{content}</div>
        {/* Subtotal */}
        <div className="flex justify-between border-b p-4">
          <p>Subtotal</p>
          <p>{data?.price}৳</p>
        </div>
        {/* Coupon */}
        {coupon.status && (
          <div className="flex justify-between border-b p-4">
            <p>Discount</p>
            <p>
              -
              {coupon.data.discountType === "fixed"
                ? coupon.data.discount
                : (coupon.data.discount / 100) * data.price}
              ৳ <b>({coupon.data.name})</b>
              <span
                className="text-xs underline ps-2 cursor-pointer"
                onClick={() => {
                  setCoupon({ status: false, data: {} });
                  toast.success("Coupon Cleared");
                }}
              >
                Clear
              </span>
            </p>
          </div>
        )}
        {/* Shipping */}
        <div className="flex justify-between border-b p-4">
          <p>Shipping</p>
          <p>120৳ (Standard)</p>
        </div>
        {/* Total */}
        <div className="flex justify-between border-b p-4 font-semibold">
          <p className="text-xl">Total</p>
          <p className="text-2xl font-extrabold">
            {coupon.status
              ? data?.price
                ? data.price -
                  (coupon.data.discountType === "fixed"
                    ? coupon.data.discount
                    : (coupon.data.discount / 100) * data.price) +
                  120
                : 0
              : data?.price
              ? data.price + 120
              : 0}
            ৳
          </p>
        </div>
      </div>
      {/* Coupon */}
      {!coupon.status && (
        <Formik
          initialValues={{
            couponName: "",
          }}
          validate={validate}
          onSubmit={async (values, { setSubmitting }) => {
            setSubmitting(true);
            const res = await check({
              coupon_name: values.couponName,
              products: cartProducts,
            });
            if (res.data) {
              if (res.data.status) {
                setCoupon({ status: true, data: res.data.data });
                toast.success(res.data.msg);
              } else toast.error(res.data.msg);
            } else {
              toast.error(res.error.data);
            }
            setSubmitting(false);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form action="" className="mt-4" onSubmit={handleSubmit}>
              <Input
                className="py-2 rounded shadow-none bg-transparent border-2 border-slate-200 text-black"
                icon={<TicketCheck size={15} />}
                id="couponName"
                placeholder="Have a coupon?"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.couponName}
              />
              <p className="text-xs text-red-400 font-bold">
                {errors.couponName && touched.couponName && errors.couponName}
              </p>
              <div className="mt-2">
                <Button
                  className="w-full"
                  title="Validate"
                  type="submit"
                  disabled={isSubmitting}
                  loading={isSubmitting}
                />
              </div>
            </form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default OrderSummary;
