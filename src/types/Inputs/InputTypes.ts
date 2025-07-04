export interface InputProps {
  id: string;
  name: string;
  className: string;
  placeholder: string;
  autoComplete: string;
  type: "checkbox" | "email" | "number" | "text" | "password";
}
