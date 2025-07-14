interface InputProps {
  id: string;
  name: string;
  className: string;
  placeholder: string;
  autoComplete: string;
  type: "checkbox" | "email" | "number" | "text" | "password";
}

const Inputs = ({ className, placeholder, type, id, name, autoComplete }: InputProps) => {
  return (
    <input
      id={id}
      name={name}
      placeholder={placeholder}
      type={type}
      autoComplete={autoComplete}
      className={`flex items-center focus:outline-none ${className} `}
    />
  );
};

export default Inputs;
