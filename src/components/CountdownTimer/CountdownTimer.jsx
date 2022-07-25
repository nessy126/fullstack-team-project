import React from "react";
import { useEffect } from "react";
import { useCountdown } from "hooks/useCountDown";

import DateTimeDisplay from "./DateTimeDisplay";
import s from "./CountdownTimer.module.scss";

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className={s.showCounter}>
      <DateTimeDisplay value={days} type={"Days"} isDanger={days <= 3} />
      <p>:</p>
      <DateTimeDisplay value={hours} type={"Hours"} isDanger={false} />
      <p>:</p>
      <DateTimeDisplay value={minutes} type={"Mins"} isDanger={false} />
      <p>:</p>
      <DateTimeDisplay value={seconds} type={"Seconds"} isDanger={false} />
    </div>
  );
};

const CountdownTimer = ({ targetDate, type, setModal }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);
  let endOfCountdown = days + hours + minutes + seconds;

  useEffect(() => {
    if (type === "targetData" && endOfCountdown <= 0) {
      setModal();
    }
  });

  if (endOfCountdown <= 0) {
    return <ShowCounter days="0" hours="0" minutes="0" seconds="0" />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
