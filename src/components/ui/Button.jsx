import { twMerge } from "tailwind-merge";

const Button = ({ title, className, ...rest }) => {
  return (
    <button
      className={twMerge(
        "bg-slate-800 hover:bg-slate-950 text-white px-4 py-2 rounded  transition-all",
        className
      )}
      {...rest}
    >
      {title}
    </button>
  );
};

export default Button;
