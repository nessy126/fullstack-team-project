import { useEffect } from "react";
import { createPortal } from "react-dom";
import { ArrowLeft } from "../icons/ArrowLeft";
import MainNav from "../MainNav";

import s from "./modal.module.scss";

const modalRoot = document.getElementById("modalRoot");

const Modal = ({ closeModal, children, type }) => {
  useEffect(() => {
    document.addEventListener("keydown", close);

    return () => document.removeEventListener("keydown", close);
  }, []);

  const close = (e) => {
    if (e.code === "Escape") {
      return closeModal();
    }
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return createPortal(
    <>
      <div onClick={close} className={s.overlay}>
        <div className={type === "Exit" ? s.headerModal : s.content}>
          {type !== "Exit" && (
            <>
              <MainNav modalClass={s.head} />
              <button className={s.button} onClick={() => closeModal()}>
                <ArrowLeft />
              </button>
            </>
          )}
          {children}
        </div>
      </div>
    </>,
    modalRoot
  );
};

export default Modal;
