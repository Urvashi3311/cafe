'use client'

import Image from "next/image";

type ButtonProps = {
  handleClick: () => void;
  type: "increment" | "decrement" | "remove";
  classes?: string
};

const Button = ({ handleClick, type, classes }: ButtonProps) => {
  const iconMap = {
    increment: {
      src: "/icon-increment-quantity.svg",
      alt: "Increment Quantity",
    },
    decrement: {
      src: "/icon-decrement-quantity.svg",
      alt: "Decrement Quantity",
    },
    remove: { src: "/icon-remove-item.svg", alt: "Remove Item" },
  };

  return (
    <button
      onClick={handleClick}
      className={` ${classes} flex justify-center items-center rounded-full size-5 border border-white`}
    >
      <Image
        src={iconMap[type].src}
        alt={iconMap[type].alt}
        width={10}
        height={10}
      />
    </button>
  );
};

export default Button;
