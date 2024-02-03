import { twMerge } from "tailwind-merge";
const Input = ({
  type = "text",
  placeholder = "",
  clickAble,
  className,
  icon,
  action = () => {},
  ...rest
}) => {
  return (
    <div className="inputGroup">
      <input
        type={type}
        placeholder={placeholder}
        {...rest}
        className={twMerge(
          "px-2 py-1 w-full rounded-sm bg-slate-950/10 text-white backdrop-blur-sm outline-none focus:ring-2 focus:ring-slate-200 shadow-lg placeholder:text-sm",
          className
        )}
      />
      {clickAble && (
        <span className="cursor-pointer" onClick={action}>
          {icon}
        </span>
      )}
    </div>
  );
};

export default Input;
