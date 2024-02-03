const Input = ({
  type = "text",
  placeholder = "",
  clickAble,
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
        className="brandInput"
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
