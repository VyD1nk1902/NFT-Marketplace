import clsx from "clsx";
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}
// React.InputHTMLAttributes<HTMLInputElement> đã bao gồm sẵn tất cả các props chuẩn của thẻ <input>
// id: string;
// name: string;
// placeholder: string;
// autoComplete: string;
// type: "checkbox" | "email" | "number" | "text" | "password";

const Inputs = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  const baseClass = "flex items-center focus:outline-none";

  const finalInputClass = clsx(baseClass, className);

  return (
    <input
      ref={ref} // <-- BẮT BUỘC CHO REACT-HOOK-FORM
      className={finalInputClass}
      {...props} //Spread all props, id, type, placeholder,...
    />
  );
});

Inputs.displayName = "Inputs"; // Thêm dòng này để tránh warning với forwardRef

export default Inputs;

// Use clsx for later add props like disabled, hasError for validation
