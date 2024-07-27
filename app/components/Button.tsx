"use client";

import { PlusIcon, MinusIcon, XMarkIcon } from "@heroicons/react/24/outline";

type ButtonProps = {
  handleClick: () => void;
  type: "increment" | "decrement" | "remove";
  classes?: string;
};

const common = "size-4 stroke-2 transition-all";
const iconMap = {
  increment: (
    <PlusIcon className={`${common} text-white group-hover:stroke-red`} />
  ),
  decrement: (
    <MinusIcon className={`${common} text-white group-hover:stroke-red`} />
  ),
  remove: (
    <XMarkIcon
      className={`${common} stroke-rose-300 group-hover:stroke-rose-900`}
    />
  ),
};

const Button = ({ handleClick, type, classes = "" }: ButtonProps) => {
  return (
    <button
      onClick={handleClick}
      className={` ${classes} flex justify-center items-center rounded-full size-5 border border-white transition-all duration-200 group hover:bg-white`}
    >
      {iconMap[type]}
    </button>
  );
};

export default Button;
