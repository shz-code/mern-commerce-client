import { twMerge } from "tailwind-merge";

const Select = ({ selectItem = [], handleChange, className }) => {
  return (
    <select
      className={twMerge(
        "border-2 border-slate-500 rounded-sm p-1 text-black outline-none focus:ring-slate-200 focus:ring-2",
        className
      )}
      onChange={handleChange}
    >
      {selectItem.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
