function Button({ children, variant, onClick, }) {
  let buttonStyle = "";

  if (variant === "primary") {
    buttonStyle = "bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition cursor-pointer";
  } else if (variant === "secondary") {
    buttonStyle = "border border-black text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition cursor-pointer";
  }

  return (
    <button className={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;