export interface ButtonProps {
  size: "primary" | "secondary" | "tertiary";
  background: "color" | "transparent";
  className: string;
  children: React.ReactNode;
  onClick?: () => void;
}
