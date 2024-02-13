import { twMerge } from "tailwind-merge";
import Loader from "./Loader";
const Button = ({ title, className, disabled, loading, ...rest }) => {
  return (
    <button
      className={twMerge(
        "bg-slate-800 hover:bg-slate-950 text-white px-4 py-2 rounded  transition-all disabled:bg-slate-600",
        className
      )}
      {...rest}
      disabled={disabled}
    >
      {!disabled ? (
        title
      ) : loading ? (
        <span className="flex gap-2 items-center justify-center">
          {title} <Loader />{" "}
        </span>
      ) : (
        title
      )}
    </button>
  );
};

export default Button;
