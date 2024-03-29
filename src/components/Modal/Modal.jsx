import { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import { ArrowLeft } from "../../assets/images/icons/ArrowLeft";
import Header from "../Header/Header";

import s from "./Modal.module.scss";

const modalRoot = document.getElementById("modalRoot");

const Modal = ({ closeModal, children, type, style }) => {
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
        <div className={type === "exit" ? s.headerModal : s.content}>
          {type !== "exit" && type !== "end" && (
            <>
              <Header modalClass={s.head} />
              <button className={s.button} onClick={() => closeModal()}>
                <ArrowLeft color={s.closeArrowColor} />
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
