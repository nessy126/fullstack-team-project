import { useDispatch, useSelector } from "react-redux";
import s from "./RegLogButtons.module.scss";
import { Link } from "react-router-dom";
import { resendVerification } from "redux/auth/authOperations";
import { useState, useEffect } from "react";
import CheckEmailModal from "components/CheckEmailModal";

const LoginOptions = () => {
  const dispatch = useDispatch();
  const { registerPass } = useSelector((state) => state.auth);
  // const state = useSelector((state) => state.auth);
  const [timer, setTimer] = useState({
    start: false,
    minutes: 0,
    seconds: 0,
  });
  // const [minutes, setMinutes] = useState()

  const { minutes, seconds } = timer;

  const [modal, setModal] = useState(false);

  const ResentConfirmation = async () => {
    const { payload } = await dispatch(resendVerification());
    // console.log(!!payload);
    if (!!payload) {
      setModal(true);
    }
  };

  let timerTest;
  const closeResend = () => {
    setModal(false);
  };

  // useEffect(() => {
  //   timerTest = setInterval(() => setTimer({ seconds: seconds + 1 }), 1000);
  //   if (seconds === 10) {
  //     setTimer({ minutes: minutes + 1 });
  //     setTimer({ seconds: (seconds = 0) });
  //   }
  //   console.log(seconds);

  //   return () => clearInterval(timerTest);
  // });

  const obj1 = { name: "adam" };
  const obj2 = { age: 23 };

  console.log({ ...obj1, ...obj2, time: 34 });

  return (
    <>
      {registerPass ? (
        <p className={s.text}>
          Resend email confirmation
          <span className={s.changePage} onClick={() => ResentConfirmation()}>
            Link
          </span>
        </p>
      ) : (
        <Link to="/register" className={s.changePage}>
          Registration
        </Link>
      )}
      <div>
        <p>
          Timer {minutes < 10 ? "0" + minutes : minutes}:{" "}
          {seconds < 10 ? "0" + seconds : seconds}
        </p>
      </div>
      {modal && <CheckEmailModal closeResend={closeResend} resend />}
      <button onClick={() => setTimer({ seconds: seconds + 2 })} type="button">
        Start
      </button>
    </>
  );
};

export default LoginOptions;
