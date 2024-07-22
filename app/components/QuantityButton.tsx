import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

type QuantityButtonProps = {
  handleClick: () => void;
  type: 'increment' | 'decrement';
};

const QuantityButton = ({ handleClick, type }: QuantityButtonProps) => {
  return (
    <button
      onClick={handleClick}
      className="flex justify-center items-center rounded-full size-5 border border-white"
    >
      <Image
        src={`/icon-${type}-quantity.svg`}
        alt={`${type === "increment" ? "Increment" : "Decrement"} Quantity`}
        width={10}
        height={10}
      />
    </button>
  );
};

export default QuantityButton;
