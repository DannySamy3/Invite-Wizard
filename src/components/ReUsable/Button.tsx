import React, { ReactNode } from "react";


interface ButtonProps {
  identifier: string;
  method: (e: React.MouseEvent<HTMLButtonElement>) => void;
  selectedElement: boolean;
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  identifier,
  method,
  selectedElement,
  children,
}) => {
  let btnStyle =
    " font-montserrat rounded-md text-lg p-2 text-start hover:bg-blue-300 outline-none hover:w-full ";
  return (
    <div>
      <button
        name={identifier}
        onClick={(e) => method(e)}
        className={`${
          selectedElement
            ? btnStyle.concat(" bg-blue-300 font-semibold w-full")
            : btnStyle
        }`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
