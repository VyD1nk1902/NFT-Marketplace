import type { ButtonProps } from "@myTypes/Buttons/ButtonTypes";
const Buttons = ({
  size = "secondary",
  background = "color",
  className,
  children,
  onClick,
}: ButtonProps) => {
  const sizeOptions = {
    primary: " h-[72px] text-[22px] ",
    secondary: " h-[60px] text-[16px] ",
    tertiary: " h-[46px] text-[16px] ",
  };

  const colorOptions = {
    color: "bg-action",
    transparent: "border-action",
  };

  const buttonSize = sizeOptions[size] || sizeOptions.secondary;
  const buttonColor = colorOptions[background] || colorOptions.color;

  const buttonOptionClass = `flex gap-[12px] text-text rounded-[20px] cursor-pointer justify-center items-center ${buttonSize} ${buttonColor} `;

  return (
    <button onClick={onClick} className={`${buttonOptionClass}, ${className}`}>
      {children}
    </button>
  );
};

export default Buttons;
