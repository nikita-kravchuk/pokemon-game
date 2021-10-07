import cn from "classnames";
import { useEffect, useRef } from "react";
import s from "./modal.module.css";

const Modal = ({ isOpen, title, children, onCloseModal }) => {
  const modalEl = useRef();
  const handleCloseModal = () => {
    onCloseModal && onCloseModal(false);
  };

  useEffect(() => {
    document.querySelector("body").style.overflow = isOpen ? "hidden" : null;
  }, [isOpen]);

  const handleClickRoot = (event) => {
    if (!modalEl.current.contains(event.target)) {
      handleCloseModal();
    }
  };

  return (
    <div className={cn(s.root, { [s.open]: isOpen })} onClick={handleClickRoot}>
      <div ref={modalEl} className={s.modal}>
        <div className={s.head}>
          {title}
          <span className={s.btnClose} onClick={handleCloseModal}></span>
        </div>
        <div className={s.content}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
