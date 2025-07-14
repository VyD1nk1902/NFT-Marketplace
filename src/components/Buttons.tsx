interface ButtonProps {
  size?: "primary" | "secondary" | "tertiary" | "none";
  background?: "color" | "transparent" | "none";
  className: string;
  children: React.ReactNode;
  onClick?: () => void;
  link: string;
}

const Buttons = ({ size = "secondary", background = "color", className, children, onClick, link }: ButtonProps) => {
  const sizeOptions = {
    primary: " h-[72px] text-[22px] font-[600]",
    secondary: " h-[60px] text-[16px] font-[600]",
    tertiary: " h-[46px] text-[16px] font-[600]",
    none: "",
  };

  const colorOptions = {
    color: "bg-action",
    transparent: " border-2 border-action ",
    none: "bg-none",
  };

  const buttonSize = sizeOptions[size] || sizeOptions.secondary;
  const buttonColor = colorOptions[background] || colorOptions.color;

  const buttonOptionClass = `flex gap-3 rounded-[20px] cursor-pointer justify-center items-center scale-100 transition-all ease-in-out duration-300 hover:scale-95 ${buttonSize} ${buttonColor} `;

  if (link === "")
    return (
      <button onClick={onClick} className={`${buttonOptionClass}, ${className}`}>
        {children}
      </button>
    );

  return (
    <a href={link} onClick={onClick} className={`${buttonOptionClass}, ${className}`}>
      {children}
    </a>
  );
};

export default Buttons;
