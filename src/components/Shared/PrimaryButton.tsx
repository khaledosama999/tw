/* eslint-disable react/require-default-props */
import React from "react";

type PrimaryButtonProps = {
  className?: string;
  children: string;
};

function PrimaryButton(props: PrimaryButtonProps) {
  const { children, className = "" } = props;

  return (
    <button type="submit" className={`rounded-full bg-black py-1 px-6 text-white ${className}`}>
      {children}
    </button>
  );
}

export default PrimaryButton;
