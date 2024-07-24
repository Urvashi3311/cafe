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
        } modal-container bg-white dark:bg-gray-dark shadow-md w-1/3 rounded-xl p-7 z-[1000] fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2`}
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
