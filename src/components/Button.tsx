import { PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren<{
  color: {
    bgColor: string;
    name: string;
  };
  onClick: (color: string) => void;
}>;

const Button = ({ color, onClick }: ButtonProps) => (
  <button
    className={`outline-none px-4 py-1 rounded-full text-white shadow-lg ${color.bgColor}`}
    onClick={() => onClick(color.bgColor)}
  >
    {color.name}
  </button>
);

export default Button;
