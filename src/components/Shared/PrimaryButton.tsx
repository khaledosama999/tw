/* eslint-disable react/require-default-props */
import React from 'react';

interface PrimaryButtonProps {
  text: string,
  className?: string,
}

function PrimaryButton(props: PrimaryButtonProps) {
  const { text, className = '' } = props;

  return (
    <button type="submit" className={`py-1 px-6 bg-black text-white rounded-full ${className}`}>
      {text}
    </button>
  );
}

export default PrimaryButton;
