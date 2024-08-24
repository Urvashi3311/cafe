import { useRef, useEffect, ReactNode, Dispatch, SetStateAction } from "react";
import useOutsideClick from "@/app/hooks/useOutsideClick";
import { motion, AnimatePresence } from "framer-motion";

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

  const backdropVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
    exit: { opacity: 0, transition: {duration: 0.15} }
  };

  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1},
    exit: { opacity: 0, transition: {duration: 0.15} }
  };
  
  return (
    <>
    <AnimatePresence >

      {isOpen && (<>
        <motion.div
      id="modal-overlay"
        className={` bg-black/50 fixed inset-0 z-10 `}
        initial="hidden"
        animate="visible"
        variants={backdropVariants}
        transition={{ duration: 0.3 }}
        
      ></motion.div>

      <motion.div
        ref={modalRef}
        id="modal-container"
        className={` after: bg-white dark:bg-gray-dark shadow-md rounded-t-xl md:rounded-xl p-7 z-[1000] w-[100%] md:w-[600px] overflow-auto
        fixed bottom-0 md:bottom-unset left-[50%] md:top-[50%] -translate-x-1/2 md:-translate-y-1/2 max-h-[90%] md:max-h-[80%]
        `}

        initial="hidden"
        animate="visible"
        exit="exit"
        variants={modalVariants}
        transition={{ duration: 0.3 }}
      >

        <div className="min-h-20">{children}</div>
      </motion.div>
      </>)}
     
      </AnimatePresence>
    </>
  );
};

export default Modal;
