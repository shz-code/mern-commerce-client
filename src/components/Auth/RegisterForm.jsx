import { Link } from "react-router-dom";
import Button from "../ui/Button";
import CheckBox from "../ui/CheckBox";
import Input from "../ui/Input";

const RegisterForm = () => {
  return (
    <form>
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
          />
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
          />
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
          />
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
          />
        </div>
        <div className="flex items-center space-x-2">
          <CheckBox id="agree" label="I accept the terms and conditions" />
        </div>
        <Button className="w-full rounded" title="Register" type="submit" />
      </div>
      <div className="space-y-2 mt-2">
        <Button
          className="w-full rounded bg-white text-black border-2 border-slate-200 hover:bg-slate-200"
          title="Sign up with Google"
        />
      </div>
      <div className="mt-4 text-center text-sm">
        Already have an account?{" "}
        <Link className="underline" to="/login">
          Login
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
