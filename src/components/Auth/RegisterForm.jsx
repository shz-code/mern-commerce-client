import { Formik } from "formik";
import { Link } from "react-router-dom";
import { useRegisterMutation } from "../../features/auth/authApi";
import Button from "../ui/Button";
import CheckBox from "../ui/CheckBox";
import Input from "../ui/Input";

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Name Missing";
  }
  if (!values.username) {
    errors.username = "Username Missing";
  }
  if (!values.email) {
    errors.email = "Email Missing";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid Email";
  }
  if (!values.phone) {
    errors.phone = "Phone Missing";
  } else if (!/(^(01){1}[3456789]{1}(\d){8})$/.test(values.phone)) {
    errors.phone = "Invalid Phone";
  }
  if (!values.password) {
    errors.password = "Password Missing";
  }
  if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  }
  return errors;
};

const RegisterForm = () => {
  const [register] = useRegisterMutation();

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          username: "",
          email: "",
          phone: "",
          password: "",
          confirmPassword: "",
        }}
        validate={validate}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(true);
          await register(values);
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
            <div className="space-y-2 mt-2">
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="name"
                >
                  Name
                </label>
                <Input
                  className="py-2 rounded shadow-none bg-transparent border-2 border-slate-200 text-black"
                  id="name"
                  placeholder="Lee Robinson"
                  required
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                <p className="text-xs text-red-400 font-bold">
                  {errors.name && touched.name && errors.name}
                </p>
              </div>
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="username"
                >
                  Username
                </label>
                <Input
                  className="py-2 rounded shadow-none bg-transparent border-2 border-slate-200 text-black"
                  id="username"
                  placeholder="shz-code"
                  required
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                />
                <p className="text-xs text-red-400 font-bold">
                  {errors.username && touched.username && errors.username}
                </p>
              </div>
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="email"
                >
                  Email
                </label>
                <Input
                  className="py-2 rounded shadow-none bg-transparent border-2 border-slate-200 text-black"
                  id="email"
                  placeholder="m@example.com"
                  required
                  type="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <p className="text-xs text-red-400 font-bold">
                  {errors.email && touched.email && errors.email}
                </p>
              </div>
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="password"
                >
                  Phone
                </label>
                <Input
                  className="py-2 rounded shadow-none bg-transparent border-2 border-slate-200 text-black"
                  id="phone"
                  placeholder="01766XXXX73"
                  required
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
                />
                <p className="text-xs text-red-400 font-bold">
                  {errors.phone && touched.phone && errors.phone}
                </p>
              </div>
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="password"
                >
                  Password
                </label>
                <Input
                  className="py-2 rounded shadow-none bg-transparent border-2 border-slate-200 text-black"
                  id="password"
                  placeholder="*******"
                  required
                  type="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <p className="text-xs text-red-400 font-bold">
                  {errors.password && touched.password && errors.password}
                </p>
              </div>
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="password"
                >
                  Confirm Password
                </label>
                <Input
                  className="py-2 rounded shadow-none bg-transparent border-2 border-slate-200 text-black"
                  id="confirmPassword"
                  placeholder="*******"
                  required
                  type="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmPassword}
                />
                <p className="text-xs text-red-400 font-bold">
                  {errors.confirmPassword &&
                    touched.confirmPassword &&
                    errors.confirmPassword}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <CheckBox
                  id="agree"
                  label="I accept the terms and conditions"
                />
              </div>
              <Button
                className="w-full rounded"
                title="Register"
                type="submit"
                disabled={isSubmitting}
                loading={isSubmitting}
              />
            </div>
          </form>
        )}
      </Formik>
      <div className="space-y-2 mt-2">
        <Link to={`${import.meta.env.VITE_API_URL}/auth/google`}>
          <Button
            className="w-full rounded bg-white text-black border-2 border-slate-200 hover:bg-slate-200"
            title="Use Google Auth"
          />
        </Link>
      </div>
      <div className="mt-4 text-center text-sm">
        Already have an account?{" "}
        <Link className="underline" to="/login">
          Login
        </Link>
      </div>
    </>
  );
};

export default RegisterForm;
