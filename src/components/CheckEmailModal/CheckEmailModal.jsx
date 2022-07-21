import { useState } from "react";
import { Navigate, Link } from "react-router-dom";

import s from "./CheckEmailModal.module.scss";
import Modal from "components/Modal";

const CheckEmailModal = ({ isRegister, closeResend, resend }) => {
  const [modal, setModal] = useState(true);

  const closeModal = () => {
    setModal(false);
  };
  return (
    <>
      {modal && (
        <Modal type="Exit" closeModal={closeResend ? closeResend : closeModal}>
          <div className={s.modal}>
            <div className={s.image}></div>
            <p className={s.text}>
              {resend
                ? "Confirmation was resending to your email"
                : "Check email and confirm your registration"}
            </p>
            {/* <Link to="/login"> */}
            <button
              className={s.okBtn}
              onClick={closeResend ? closeResend : closeModal}
            >
              {" "}
              Ok
            </button>
            {/* </Link> */}
          </div>
        </Modal>
      )}
      {!modal && isRegister && <Navigate to="/login" />}
    </>
  );
};

export default CheckEmailModal;
