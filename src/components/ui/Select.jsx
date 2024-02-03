const Select = ({ selectItem = [], handleChange }) => {
  return (
    <select
      className="border-2 border-slate-500 rounded-sm p-1 text-black"
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
