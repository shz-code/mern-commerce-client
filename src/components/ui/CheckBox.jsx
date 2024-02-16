import { twMerge } from "tailwind-merge";

const CheckBox = ({ id, label, className, selected, ...rest }) => {
  return (
    <div className="flex items-center w-full  px-2 py-1 rounded-sm">
      <input
        id={id}
        type="checkbox"
        checked={selected}
        className={twMerge("w-4 h-4 accent-slate-900", className)}
        {...rest}
        onChange={() => {}}
      />

      <label
        htmlFor={id}
        className="ml-2 text-sm font-medium text-gray-900 w-full cursor-pointer"
      >
        {label}
      </label>
    </div>
  );
};

export default CheckBox;
