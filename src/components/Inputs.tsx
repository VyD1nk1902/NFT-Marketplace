import clsx from "clsx";

interface InputProps {
  id: string;
  name: string;
  className: string;
  placeholder: string;
  autoComplete: string;
  type: "checkbox" | "email" | "number" | "text" | "password";
}

const Inputs = ({ className, placeholder, type, id, name, autoComplete }: InputProps) => {
  const baseClass = "flex items-center focus:outline-none";

  const finalInputClass = clsx(baseClass, className);

  return (
    <input
      id={id}
      name={name}
      placeholder={placeholder}
      type={type}
      autoComplete={autoComplete}
      className={finalInputClass}
    />
  );
};

export default Inputs;

// Use clsx for later add props like disabled, hasError for validation
