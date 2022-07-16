import { useEffect } from "react";
import { createPortal } from "react-dom";

import s from "./modal.module.scss";

const modalRoot = document.getElementById("modalRoot");

const Modal = ({ closeModal, children }) => {
  console.log("handleClose", closeModal);
  useEffect(() => {
    document.addEventListener("keydown", close);

    return () => document.removeEventListener("keydown", close);
  }, []);

  const close = (e) => {
    console.log("e.code", e.code);
    if (e.code === "Escape") {
      return closeModal();
    }
    closeModal();
  };

  return createPortal(
    <div onClick={close} className={s.overlay}>
      <div className={s.content}>{children}</div>
    </div>,
    modalRoot
  );
};

export default Modal;
