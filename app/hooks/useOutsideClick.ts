import { useEffect, RefObject } from "react";

type EventType = MouseEvent | TouchEvent;

export default function useOutsideClick(ref: RefObject<HTMLElement>, handler: (event: EventType) => void) {
  useEffect(() => {
    function listener(event: EventType) {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }

      handler(event);
    }

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [handler, ref]);
}
