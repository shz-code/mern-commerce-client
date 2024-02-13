import { Formik } from "formik";
import { Link } from "react-router-dom";
import { useLoginMutation } from "../../features/auth/authApi";
import Button from "../ui/Button";
import Input from "../ui/Input";

const validate = (values) => {
  const errors = {};
  if (!values.data) {
    errors.data = "Product Name Missing";
  }
  if (!values.password) {
    errors.password = "Password Missing";
  }
  return errors;
};

const Login = () => {
  const [login] = useLoginMutation();

  return (
    <div className="w-full py-8 bg-slate-200 px-2">
      <div className="flex items-center justify-center h-full">
        <div className="rounded-sm border-t-4 border-slate-950 bg-white shadow mx-auto max-w-md w-full p-3 sm:p-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-sm">
              Enter your email below to login to your account
            </p>
          </div>
          <Formik
            initialValues={{
              data: "",
              password: "",
            }}
            validate={validate}
            onSubmit={async (values, { setSubmitting }) => {
              setSubmitting(true);
              await login(values);
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
              <form className="mt-4" onSubmit={handleSubmit}>
                <div>
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="email"
                    >
                      Email/ Username
                    </label>
                    <Input
                      className="py-2 rounded shadow-none bg-transparent border-2 border-slate-200 text-black"
                      id="data"
                      placeholder="contact@shahidulalam.xyz / shz"
                      required
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.data}
                    />
                    <p className="text-xs text-red-400 font-bold">
                      {errors.data && touched.data && errors.data}
                    </p>
                  </div>
                  <div className="space-y-2 mt-2">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <label
                        className="text-sm font-medium leading-none"
                        htmlFor="password"
                      >
                        Password
                      </label>
                      <Link
                        className="ml-auto inline-block text-sm underline"
                        to={"/login"}
                      >
                        Forgot your password?
                      </Link>
                    </div>
                    <Input
                      className="py-2 shadow-none rounded bg-transparent border-2 border-slate-200 text-black"
                      id="password"
                      placeholder="********"
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
                  <div className="py-2">
                    <Button
                      className="w-full rounded"
                      title="Login"
                      disabled={isSubmitting}
                      loading={isSubmitting}
                      type="submit"
                    />
                  </div>
                  <div className="pb-2">
                    <Button
                      className="w-full rounded bg-white text-black border-2 border-slate-200 hover:bg-slate-200"
                      title="Login with Google"
                      type="submit"
                    />
                  </div>
                </div>
                <div className="mt-4 text-center text-sm">
                  Don&rsquo;t have an account?{" "}
                  <Link className="underline" to="/register">
                    Sign up
                  </Link>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
