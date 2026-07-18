function Button({ children, variant, onClick, }) {
  let buttonStyle = "";

  if (variant === "primary") {
    buttonStyle = "bg-purple-600 border border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-purple-700 transition-all duration-300 hover:-translate-y-0.25 cursor-pointer shadow-sm hover:shadow-lg active:scale-95";
  } else if (variant === "secondary") {
    buttonStyle = "bg-white border border-purple-600 text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:-translate-y-0.25 cursor-pointer shadow-sm hover:shadow-lg active:scale-95";
  }

  return (
    <button className={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;