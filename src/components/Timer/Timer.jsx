import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { resendVerification } from "redux/auth/authOperations";

import s from "./Timer.module.scss";

const Timer = ({ setModal }) => {
  const dispatch = useDispatch();
  const [timer, setTimer] = useState(false);

  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(30);

  const ResentConfirmation = async () => {
    const { payload } = await dispatch(resendVerification());
    if (!!payload) {
      setModal(true);
    }
  };

  useEffect(() => {
    if (timer) {
      const timerLink = setInterval(() => setSeconds(seconds - 1), 1000);
      if (seconds === 0) {
        setMinutes(minutes - 1);
        setSeconds(60);
      }
      if (minutes === 0 && seconds === 0) {
        setTimer(false);
      }
      return () => clearInterval(timerLink);
    }
  }, [minutes, seconds, timer]);
  const resetTimer = () => {
    setMinutes(1);
    setSeconds(30);
  };

  const handleClick = () => {
    setTimer(true);
    resetTimer();
    ResentConfirmation();
  };

  return (
    <>
      {timer ? (
        <span>
          &nbsp;
          {minutes < 10 ? "0" + minutes : minutes}:
          {seconds < 10 ? "0" + seconds : seconds}
        </span>
      ) : (
        <span className={s.changePage} onClick={handleClick}>
          Link
        </span>
      )}
    </>
  );
};

export default Timer;
