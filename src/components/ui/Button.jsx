const Button = ({ title, ...rest }) => {
  return (
    <button
      className="bg-slate-800 hover:bg-slate-950 text-white px-4 py-2 rounded-sm"
      {...rest}
    >
      {title}
    </button>
  );
};

export default Button;
