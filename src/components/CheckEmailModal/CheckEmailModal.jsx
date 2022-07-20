import { useState } from "react";
import { Navigate, Link } from "react-router-dom";

import s from "./CheckEmailModal.module.scss";
import Modal from "components/Modal";

const CheckEmailModal = ({ isRegister }) => {
  const [modal, setModal] = useState(true);
  console.log("modal: ", modal);
  console.log("isRegister: ", isRegister);

  const closeModal = () => {
    setModal(false);
  };
  return (
    <>
      {modal && (
        <Modal type="Exit" closeModal={closeModal}>
          <div className={s.modal}>
            <div className={s.image}></div>
            <p className={s.text}>Check email and confirm your registration</p>
            {/* <Link to="/login"> */}
            <button className={s.okBtn} onClick={closeModal}>
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
