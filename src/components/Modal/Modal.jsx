import { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import { ArrowLeft } from "../MainNav/icons/ArrowLeft";
import MainNav from "../MainNav/MainNav";

import s from "./Modal.module.scss";

const modalRoot = document.getElementById("modalRoot");

const Modal = ({ closeModal, children, type }) => {
  const close = useCallback(
    (e) => {
      if (e.code === "Escape") {
        return closeModal();
      }
      if (e.target === e.currentTarget) {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", close);

    return () => document.removeEventListener("keydown", close);
  }, [close]);

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
