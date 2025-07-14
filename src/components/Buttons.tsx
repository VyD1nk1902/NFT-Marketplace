import clsx from "clsx";
import { Link } from "react-router-dom";

interface ButtonProps {
  size?: "primary" | "secondary" | "tertiary" | "none";
  background?: "color" | "transparent" | "none";
  className: string;
  children: React.ReactNode;
  onClick?: () => void;
  to?: string;
}

const Buttons = ({ size = "secondary", background = "color", className, children, onClick, to }: ButtonProps) => {
  // Class always applied
  const baseClass =
    "flex gap-3 rounded-[20px] cursor-pointer justify-center items-center scale-100 transition-all ease-in-out duration-300 hover:scale-95";

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

  const appliedSizeClass = sizeOptions[size] || sizeOptions.secondary;
  const appliedColorClass = colorOptions[background] || colorOptions.color;

  const finalButtonClasses = clsx(baseClass, appliedSizeClass, appliedColorClass, className);

  if (to)
    return (
      <Link to={to} onClick={onClick} className={finalButtonClasses}>
        {children}
      </Link>
    );

  return (
    <button onClick={onClick} className={finalButtonClasses}>
      {children}
    </button>
  );
};

export default Buttons;
