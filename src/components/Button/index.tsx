import React from "react";
import { Link } from "react-router-dom";
import { Button2Props, ButtonProps, WhiteButtonProps } from "../../types";

// GreyButton component
// This component renders a button styled as a link with a grey background.
// Props:
// - path: the URL path the button links to.
// - children: the content inside the button.
// - className: additional CSS classes for the button.
export const GreyButton: React.FC<ButtonProps> = ({
  path = "",
  children,
  className,
}) => {
  return (
    <Link
      to={path}
      className={
        className +
        ` w-max py-4 px-6 border-2 rounded-4xl bg-gray-500 bg-opacity-60 transition-700 hover:border-[--secound] hover:text-[--black] hover:bg-[--secound] hover:bg-opacity-100`
      }
    >
      {children}
    </Link>
  );
};

// BlackButton component
// This component renders a button styled as a link with a black background.
// Props:
// - path: the URL path the button links to.
// - children: the content inside the button.
// - className: additional CSS classes for the button.
export const BlackButton: React.FC<ButtonProps> = ({
  path = "",
  children,
  className,
}) => {
  return (
    <Link
      to={path}
      className={
        className +
        ` py-4 px-6 rounded-4xl text-[--white] bg-[--black] transition-700 hover:text-[--black] hover:bg-[--secound] text-center whitespace-nowrap`
      }
    >
      {children}
    </Link>
  );
};

export const BlackButton2: React.FC<Button2Props> = ({
  children,
  className,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={
        className +
        ` w-max py-4 px-6 rounded-4xl text-[--white] bg-[--black] transition-700 hover:text-[--black] hover:bg-[--secound]`
      }
    >
      {children}
    </button>
  );
};

// WhiteButton component
// This component renders a button with a white or transparent background based on the value prop.
// Props:
// - className: additional CSS classes for the button.
// - value: boolean to determine the background color of the button (true for [--secound] color, false for transparent).
// - children: the content inside the button.
// - onClick: function to handle the click event.
export const WhiteButton: React.FC<WhiteButtonProps> = ({
  className = "",
  value = false,
  children,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={
        `w-max py-2 px-6 border-black rounded-4xl ${
          value ? "bg-[--secound]" : "bg-transparent"
        } text-[--black] transition-700 hover:text-[--black] hover:bg-[--secound] ` +
        className
      }
    >
      {children}
    </button>
  );
};
