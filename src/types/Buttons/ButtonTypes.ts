export interface ButtonProps {
  size?: "primary" | "secondary" | "tertiary" | "none";
  background?: "color" | "transparent" | "none";
  className: string;
  children: React.ReactNode;
  onClick?: () => void;
  link: string;
}
