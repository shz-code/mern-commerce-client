import { Formik } from "formik";
import { useSelector } from "react-redux";
import { useGetCartQuery } from "../../features/cart/cartApi";
import { useOrderMutation } from "../../features/order/orderApi";
import { useGetProfileQuery } from "../../features/profile/profileApi";
import Button from "../ui/Button";
import CheckBox from "../ui/CheckBox";
import Input from "../ui/Input";
import Loader from "../ui/Loader";
import TextArea from "../ui/TextArea";

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Email Missing";
  }
  if (!values.address) {
    errors.address = "Address Missing";
  }
  if (!values.state) {
    errors.state = "State Missing";
  }
  if (!values.city) {
    errors.city = "City Missing";
  }
  if (!values.postcode) {
    errors.postcode = "Postcode Missing";
  }
  if (!values.phone) {
    errors.phone = "Phone Missing";
  }
  if (values.agree.length === 0) {
    errors.agree = "You must agree to proceed order";
  }
  return errors;
};

const CheckoutForm = ({ coupon }) => {
  const { _id } = useSelector((state) => state.user);

  const { data, isError, isLoading } = useGetProfileQuery(_id);
  const { data: cart } = useGetCartQuery();

  const [order] = useOrderMutation();

  let content = null;
  if (isLoading) content = <Loader />;
  else if (!isLoading && isError) content = "There was an error";
  else if (!isLoading && !isError) {
    const { address, city, country, postcode, state, user } = data;
    content = (
      <Formik
        initialValues={{
          email: user.email,
          address: address === "none" ? "" : address,
          state: state === "none" ? "" : state,
          city: city === "none" ? "" : city,
          country: country,
          postcode: postcode,
          phone: user.phone === "none" ? "" : user.phone,
          agree: [],
        }}
        validate={validate}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(true);
          const res = await order({
            cart: cart,
            coupon: coupon,
            user_info: {
              address: values.address,
              city: values.city,
              state: values.state,
              postcode: Number(values.postcode),
              country: values.country,
              phone: values.phone,
            },
          });
          if (res.data.status) {
            window.location = res.data.url;
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
          <form className="space-y-2 mt-4" onSubmit={handleSubmit}>
            <h4 className="font-semibold text-lg">Billing details</h4>
            {/* Contact Form */}
            <div>
              {/* Full name */}
              <div className="w-full space-y-2">
                <label
                  className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="email"
                >
                  Email/ Username
                </label>
                <Input
                  className="py-2 rounded shadow-none bg-transparent border-2 border-slate-200 text-black"
                  id="email"
                  placeholder="contact@shahidulalam.xyz / shz"
                  required
                  type="text"
                  disabled={true}
                  value={values.email}
                />
              </div>
              {/* Address */}
              <div className="w-full space-y-2">
                <label
                  className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="address"
                >
                  Address
                </label>
                <TextArea
                  className="py-2 rounded shadow-none bg-transparent border-2 border-slate-200 text-black"
                  placeholder="Kamal Avenue"
                  id="address"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.address}
                />
                <p className="text-xs text-red-400 font-bold">
                  {errors.address && touched.address && errors.address}
                </p>
                <div className="pb-2">
                  Country: <b>{country}</b>
                </div>
              </div>
              <div className="w-full flex justify-between gap-4">
                {/* State */}
                <div className="w-full space-y-2">
                  <label
                    className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="state"
                  >
                    State
                  </label>
                  <Input
                    className="py-2 rounded shadow-none bg-transparent border-2 border-slate-200 text-black"
                    id="state"
                    placeholder="Dhaka"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.state}
                  />
                  <p className="text-xs text-red-400 font-bold">
                    {errors.state && touched.state && errors.state}
                  </p>
                </div>
                {/* City */}
                <div className="w-full space-y-2">
                  <label
                    className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="city"
                  >
                    City
                  </label>
                  <Input
                    className="py-2 rounded shadow-none bg-transparent border-2 border-slate-200 text-black"
                    id="city"
                    placeholder="Dhaka"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.city}
                  />
                  <p className="text-xs text-red-400 font-bold">
                    {errors.city && touched.city && errors.city}
                  </p>
                </div>
                {/* Postcode */}
                <div className="w-full space-y-2">
                  <label
                    className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="postcode"
                  >
                    Postcode
                  </label>
                  <Input
                    className="py-2 rounded shadow-none bg-transparent border-2 border-slate-200 text-black"
                    id="postcode"
                    placeholder="1200"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.postcode}
                  />
                  <p className="text-xs text-red-400 font-bold">
                    {errors.postcode && touched.postcode && errors.postcode}
                  </p>
                </div>
              </div>
              {/* Phone */}
              <div className="w-full space-y-2">
                <label
                  className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="phone"
                >
                  Phone
                </label>
                <Input
                  className="py-2 rounded shadow-none bg-transparent border-2 border-slate-200 text-black"
                  id="phone"
                  placeholder="01766****93"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
                />
                <p className="text-xs text-red-400 font-bold">
                  {errors.phone && touched.phone && errors.phone}
                </p>
              </div>
            </div>
            <div className="space-y-2 mt-4">
              <h4 className="font-semibold text-lg">Payment</h4>
              <div className="p-4 border-2 rounded text-slate-800 text-center">
                Your payment will be processed by SSL Commerz
                <div className="w-32 mx-auto mt-2">
                  <img
                    src="https://securepay.sslcommerz.com/public/image/sslcommerz.png"
                    alt="SSL Commerz Logo"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-2 pt-2">
              <p className="text-xs">
                Your personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our privacy policy.
              </p>
              <div className="-ms-2">
                <CheckBox
                  id="agree"
                  name="agree"
                  label="I have read and agree to the website terms and conditions"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value="agree"
                />
                <p className="text-xs text-red-400 font-bold">
                  {errors.agree && touched.agree && errors.agree}
                </p>
              </div>
              <div className="pt-2">
                <Button
                  className="w-full"
                  title={`Place order`}
                  type="submit"
                  disabled={isSubmitting || !cart.price}
                  loading={isSubmitting}
                />
              </div>
            </div>
          </form>
        )}
      </Formik>
    );
  }
  return (
    <div className="customerInfo w-full text-sm">
      <div className="space-y-2">
        <h4 className="font-semibold text-lg">Customer information</h4>
        <p>
          Welcome back <b>{data ? data.user.name : "Anonyms"}</b>
        </p>
      </div>
      {content}
    </div>
  );
};

export default CheckoutForm;
