import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";

import CheckEmailModal from "components/CheckEmailModal";
import Timer from "components/Timer";

import s from "./RegLogButtons.module.scss";

const LoginOptions = () => {
  const { registerPass } = useSelector((state) => state.auth);

  const [modal, setModal] = useState(false);

  const closeResend = () => {
    setModal(false);
  };

  return (
    <>
      {registerPass ? (
        <p className={s.text}>
          Resend email confirmation
          <Timer setModal={setModal} />
        </p>
      ) : (
        <Link to="/register" className={s.changePage}>
          Registration
        </Link>
      )}
      {modal && <CheckEmailModal closeResend={closeResend} resend />}
    </>
  );
};

export default LoginOptions;
