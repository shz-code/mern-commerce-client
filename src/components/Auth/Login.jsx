import { Link } from "react-router-dom";
import Button from "../ui/Button";
import Input from "../ui/Input";

const Login = () => {
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
          <form className="mt-4">
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
                  id="email"
                  placeholder="contact@shahidulalam.xyz / shz"
                  required
                  type="text"
                />
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
                />
              </div>
              <div className="py-2">
                <Button className="w-full rounded" title="Login" />
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
        </div>
      </div>
    </div>
  );
};

export default Login;
