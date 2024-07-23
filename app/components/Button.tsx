"use client";

import Image from "next/image";

import { PlusIcon, MinusIcon, XMarkIcon } from "@heroicons/react/24/outline";

// TODO: add default to classes
type ButtonProps = {
  handleClick: () => void;
  type: "increment" | "decrement" | "remove";
  classes?: string;
};

const iconMap = {
  increment: (
    <PlusIcon className="size-4 text-white stroke-2 group-hover:stroke-red" />
  ),
  decrement: (
    <MinusIcon className="size-4 text-white stroke-2 group-hover:stroke-red" />
  ),
  remove: (
    <XMarkIcon className="size-4 stroke-rose-300 stroke-2 hover:stroke-rose-900" />
  ),
};

const Button = ({ handleClick, type, classes }: ButtonProps) => {
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
