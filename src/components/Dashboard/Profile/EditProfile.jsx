import { Formik } from "formik";
import { useSelector } from "react-redux";
import {
  useGetProfileQuery,
  useUpdateProfileMutation,
} from "../../../features/profile/profileApi";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import Loader from "../../ui/Loader";
import TextArea from "../../ui/TextArea";

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Name Missing";
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
  return errors;
};

const EditProfile = ({ setModalOpen }) => {
  const { _id } = useSelector((state) => state.user);

  const { data, isError, isLoading } = useGetProfileQuery(_id);

  const [updateProfile] = useUpdateProfileMutation();

  let content = null;
  if (isLoading) content = <Loader />;
  else if (!isLoading && isError) content = "There was an error";
  else if (!isLoading && !isError) {
    const { address, city, country, postcode, state, user } = data;
    content = (
      <Formik
        initialValues={{
          name: user.name,
          address: address === "none" ? "" : address,
          state: state === "none" ? "" : state,
          city: city === "none" ? "" : city,
          country: country,
          postcode: postcode,
          phone: user.phone === "none" ? "" : user.phone,
        }}
        validate={validate}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(true);
          await updateProfile({
            id: _id,
            body: {
              name: values.name,
              address: values.address,
              city: values.city,
              state: values.state,
              postcode: Number(values.postcode),
              country: values.country,
              phone: values.phone,
            },
          });
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
          <form onSubmit={handleSubmit}>
            <div className="p-4">
              <div>
                <h3 className="text-3xl font-bold">Update User Information</h3>
                <p className="text-sm">Enter the details of your product.</p>
              </div>
              <div>
                <div className="space-y-1 mt-4">
                  {/* Name */}
                  <div className="space-y-1">
                    <label className="text-sm font-medium" htmlFor="name">
                      Name
                    </label>
                    <Input
                      className="py-2 rounded shadow-none bg-transparent border-2 border-slate-200 text-black"
                      id="name"
                      placeholder="Ex: Shanto"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                    />
                    <p className="text-xs text-red-400 font-bold">
                      {errors.name && touched.name && errors.name}
                    </p>
                  </div>
                  {/* Phone */}
                  <div className="space-y-1">
                    <label className="text-sm font-medium" htmlFor="phone">
                      Phone
                    </label>
                    <Input
                      className="py-2 rounded shadow-none bg-transparent border-2 border-slate-200 text-black"
                      id="phone"
                      placeholder="Ex: 01766****73"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phone}
                    />
                    <p className="text-xs text-red-400 font-bold">
                      {errors.phone && touched.phone && errors.phone}
                    </p>
                  </div>
                  {/* Address */}
                  <div className="space-y-1">
                    <label className="text-sm font-medium" htmlFor="address">
                      Address
                    </label>
                    <TextArea
                      className="py-2 rounded shadow-none bg-transparent border-2 border-slate-200 text-black"
                      id="address"
                      placeholder="Ex: Uttara"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.address}
                    />
                    <p className="text-xs text-red-400 font-bold">
                      {errors.address && touched.address && errors.address}
                    </p>
                  </div>
                  {/* State */}
                  <div className="space-y-1">
                    <label className="text-sm font-medium" htmlFor="state">
                      State
                    </label>
                    <Input
                      className="py-2 rounded shadow-none bg-transparent border-2 border-slate-200 text-black"
                      id="state"
                      placeholder="Ex: Dhaka"
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
                  <div className="space-y-1">
                    <label className="text-sm font-medium" htmlFor="city">
                      City
                    </label>
                    <Input
                      className="py-2 rounded shadow-none bg-transparent border-2 border-slate-200 text-black"
                      id="city"
                      placeholder="Ex: Dhaka"
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
                  <div className="space-y-1">
                    <label className="text-sm font-medium" htmlFor="postcode">
                      Postcode
                    </label>
                    <Input
                      className="py-2 rounded shadow-none bg-transparent border-2 border-slate-200 text-black"
                      id="postcode"
                      placeholder="Ex: 1200"
                      type="number"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.postcode}
                    />
                    <p className="text-xs text-red-400 font-bold">
                      {errors.postcode && touched.postcode && errors.postcode}
                    </p>
                  </div>
                  {/* Country */}
                  <div className="space-y-1">
                    <label className="text-sm font-medium" htmlFor="country">
                      Country
                    </label>
                    <Input
                      className="py-2 rounded shadow-none bg-transparent border-2 border-slate-200 text-black disabled:bg-slate-400/30"
                      id="country"
                      placeholder="Ex: Bangladesh"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.country}
                      disabled={true}
                    />
                    <p className="text-xs text-red-400 font-bold">
                      {errors.country && touched.country && errors.country}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-2 px-4 pb-4">
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
    );
  }

  const handleClick = (e) => {
    if (e.target.classList.contains("editProfileModal")) setModalOpen(false);
  };

  return (
    <div
      className="fixed top-0 left-0 h-full w-full bg-slate-950/30 editProfileModal z-10 cursor-pointer overflow-y-scroll px-4"
      onClick={(e) => handleClick(e)}
    >
      <div className="max-w-[500px] mx-auto my-8 sm:my-24 bg-slate-50/80 backdrop-blur rounded cursor-default ">
        {content}
      </div>
    </div>
  );
};

export default EditProfile;
