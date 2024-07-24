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
      id="modal-overlay"
        className={`${
          isOpen ? "block" : "hidden"
        } bg-black/50 fixed inset-0 z-10`}
      ></div>

      <div
        ref={modalRef}
        id="modal-container"
        className={`${
          isOpen ? "block" : "hidden"
        }  bg-white dark:bg-gray-dark shadow-md rounded-t-xl md:rounded-xl p-7 z-[1000] w-[100%] md:w-[600px] overflow-auto
        fixed bottom-0 md:bottom-unset left-[50%] md:top-[50%] -translate-x-1/2 md:-translate-y-1/2 max-h-[90%] md:max-h-[80%]
        `}
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
