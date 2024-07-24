import { useRef, useEffect, ReactNode, Dispatch, SetStateAction } from "react";
import useOutsideClick from "@/app/hooks/useOutsideClick";
// import { XMarkIcon } from "@heroicons/react/24/outline";

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const Modal = ({ children, isOpen, setIsOpen }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const onCloseHandler = () => {
    isOpen && setIsOpen(false);
  };

  useOutsideClick(modalRef, onCloseHandler);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);


  return (
    <>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } modal-overlay bg-black/50 fixed inset-0 z-10`}
      ></div>

      <div
        ref={modalRef}
        className={`${
          isOpen ? "block" : "hidden"
        } modal-container bg-white dark:bg-gray-dark shadow-md rounded-t-xl md:rounded-xl p-7 z-[1000] fixed w-full md:w-3/4 md:max-h-2/3 lg:w-2/3  md:top-1/2 left-1/2 bottom-0 md:-translate-y-1/2 -translate-x-1/2 overflow-auto`}
      >
        {/* <button className="btn" onClick={() => onCloseHandler()}>
          <XMarkIcon className="size-4 " />
        </button> */}

        <div className="min-h-20">{children}</div>
      </div>
    </>
  );
};

export default Modal;
