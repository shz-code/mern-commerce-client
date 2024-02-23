import { Formik } from "formik";
import { useAddCouponMutation } from "../../../features/coupon/couponApi";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import Select from "../../ui/Select";
import TextArea from "../../ui/TextArea";
import AllCoupons from "./AllCoupons";

const discountType = [
  {
    value: "fixed",
    label: "Fixed",
  },
  {
    value: "percentage",
    label: "Percentage",
  },
];

const validity = [
  {
    value: "all",
    label: "All",
  },
];

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Coupon Name Missing";
  }
  if (!values.description) {
    errors.description = "Description Missing";
  }
  if (!values.useable) {
    errors.useable = "Limit Missing";
  }
  if (!values.discountType) {
    errors.discountType = "Discount Type Missing";
  }
  if (!values.amount) {
    errors.amount = "Amount Missing";
  }
  if (!values.validity) {
    errors.validity = "Validity Missing";
  }
  if (!values.expire) {
    errors.expire = "Coupon Expire Missing";
  }
  return errors;
};

const Coupons = () => {
  const [addCoupon] = useAddCouponMutation();

  return (
    <main className="space-y-2">
      <AllCoupons />
      <Formik
        initialValues={{
          name: "",
          description: "",
          discountType: "",
          amount: "",
          useable: "",
          validity: "",
          expire: "",
        }}
        validate={validate}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          await addCoupon({
            name: values.name,
            description: values.description,
            discountType: values.discountType,
            discount: Number(values.amount),
            useable: Number(values.useable),
            validity: values.validity,
            expire: new Date(values.expire).getTime(),
          });
          resetForm();
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
          <form className="bg-white shadow rounded" onSubmit={handleSubmit}>
            <div className="p-4">
              <div>
                <h3 className="text-3xl font-bold">Coupon Details</h3>
                <p className="text-sm">Enter the details of new coupon.</p>
              </div>
              <div>
                <div className="space-y-1 mt-4">
                  {/* Name */}
                  <div className="space-y-1">
                    <label className="text-sm font-medium" htmlFor="name">
                      Coupon Name
                    </label>
                    <Input
                      className="py-2 rounded shadow-none bg-transparent border-2 border-slate-200 text-black"
                      id="name"
                      placeholder="ABC100"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                    />
                    <p className="text-xs text-red-400 font-bold">
                      {errors.name && touched.name && errors.name}
                    </p>
                  </div>
                  {/* Description */}
                  <div className="space-y-1">
                    <label
                      className="text-sm font-medium"
                      htmlFor="description"
                    >
                      Coupon Description
                    </label>
                    <TextArea
                      className="py-2 rounded shadow-none bg-transparent border-2 border-slate-200 text-black"
                      id="description"
                      placeholder="100 Taka Fixed Discount Coupon"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.description}
                    />
                    <p className="text-xs text-red-400 font-bold">
                      {errors.description &&
                        touched.description &&
                        errors.description}
                    </p>
                  </div>
                  {/* Row */}
                  <div className="flex justify-between gap-4 flex-wrap md:flex-nowrap">
                    {/* Discount Type */}
                    <div className="grid gap-1 w-full">
                      <label
                        className="text-sm font-medium"
                        htmlFor="discountType"
                      >
                        Coupon Discount Type
                      </label>
                      <div className="w-full ">
                        <Select
                          id="discountType"
                          selectItem={discountType}
                          className="w-full py-2"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.discountType}
                        />
                        <p className="text-xs text-red-400 font-bold">
                          {errors.discountType &&
                            touched.discountType &&
                            errors.discountType}
                        </p>
                      </div>
                    </div>
                    {/* Discount Amount */}
                    <div className="space-y-1 w-full">
                      <label className="text-sm font-medium" htmlFor="amount">
                        {values.discountType === "fixed"
                          ? "Discount Amount"
                          : values.discountType === "percentage"
                          ? "Discount Percentage"
                          : null}
                        {!values.discountType && "Discount Amount/ Percentage"}
                      </label>
                      <Input
                        className="py-2 rounded shadow-none bg-transparent border-2 border-slate-200 text-black"
                        id="amount"
                        placeholder="100"
                        type="number"
                        min={1}
                        max={values.discountType === "fixed" ? 5000 : 100}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.amount}
                      />
                      <p className="text-xs text-red-400 font-bold">
                        {errors.amount && touched.amount && errors.amount}
                      </p>
                    </div>
                    {/* Limit */}
                    <div className="space-y-1 w-full">
                      <label className="text-sm font-medium" htmlFor="useable">
                        Coupon Usage Limit
                      </label>
                      <Input
                        className="py-2 rounded shadow-none bg-transparent border-2 border-slate-200 text-black"
                        id="useable"
                        placeholder="10"
                        type="number"
                        min={1}
                        max={100}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.limit}
                      />
                      <p className="text-xs text-red-400 font-bold">
                        {errors.useable && touched.useable && errors.useable}
                      </p>
                    </div>
                  </div>
                  {/* Row */}
                  <div className="flex justify-between gap-4 flex-wrap sm:flex-nowrap">
                    {/* Validity */}
                    <div className="grid gap-1 w-full">
                      <label className="text-sm font-medium" htmlFor="validity">
                        Coupon Validity
                      </label>
                      <div className="w-full ">
                        <Select
                          id="validity"
                          selectItem={validity}
                          className="w-full py-2"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.validity}
                        />
                        <p className="text-xs text-red-400 font-bold">
                          {errors.validity &&
                            touched.validity &&
                            errors.validity}
                        </p>
                      </div>
                    </div>
                    {/* Expire */}
                    <div className="space-y-1 w-full">
                      <label className="text-sm font-medium" htmlFor="expire">
                        Coupon Expire
                      </label>
                      <Input
                        className="py-2 rounded shadow-none bg-transparent border-2 border-slate-200 text-black"
                        id="expire"
                        type="datetime-local"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.expire}
                      />
                      <p className="text-xs text-red-400 font-bold">
                        {errors.expire && touched.expire && errors.expire}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-2 pb-4 px-4">
              <Button
                title="Submit"
                type="submit"
                disabled={isSubmitting}
                loading={isSubmitting}
              />
            </div>
          </form>
        )}
      </Formik>
    </main>
  );
};
export default Coupons;
