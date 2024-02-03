const CheckBox = ({ id, label, selected, ...rest }) => {
  return (
    <div className="flex items-center w-full bg-slate-200 px-2 py-1 rounded-sm">
      <input
        id={id}
        type="checkbox"
        defaultChecked={selected}
        className="w-4 h-4 accent-slate-900"
        {...rest}
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
