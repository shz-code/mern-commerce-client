import { twMerge } from "tailwind-merge";

const TextArea = ({ type = "text", placeholder = "", className, ...rest }) => {
  return (
    <div className="inputGroup">
      <textarea
        type={type}
        placeholder={placeholder}
        {...rest}
        className={twMerge(
          "px-2 py-1 w-full rounded-sm bg-slate-950/10 text-white backdrop-blur-sm outline-none focus:ring-2 focus:ring-slate-200 shadow-lg placeholder:text-sm",
          className
        )}
      ></textarea>
    </div>
  );
};

export default TextArea;
