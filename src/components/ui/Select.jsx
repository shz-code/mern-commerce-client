import { twMerge } from "tailwind-merge";

const Select = ({
  selectItem = [],
  handleChange,
  className,
  label = "",
  ...rest
}) => {
  return (
    <select
      className={twMerge(
        "border-2 border-slate-500 rounded-sm p-1 text-black outline-none focus:ring-slate-200 focus:ring-2",
        className
      )}
      onChange={handleChange}
      {...rest}
    >
      <option hidden value="">
        {label ? label : "Select"}
      </option>
      {selectItem.map((item) => (
        <option
          key={item.value ? item.value : item._id}
          value={item.value ? item.value : item._id}
        >
          {item.label ? item.label : item.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
