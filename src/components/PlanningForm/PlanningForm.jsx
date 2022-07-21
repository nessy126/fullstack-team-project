import React, { useState, useEffect } from "react";
import s from "./PlanningForm.module.scss";
// import calendarIconSvg from '../../assets/svg/calendar1.svg';
import polygonIconSvg from "../../assets/svg/polygon1.svg";
import DateTimePicker from "react-datetime-picker";
import { toast } from "react-toastify";
import { get, save, remove } from "utils/localStorage/localStorage";

const PlanningForm = ({addStartTraining, addEndTraining, addAmountOfDaysTraining}) => {
  const [valueStart, setValueStart] = useState(null);
  const [valueEnd, setValueEnd] = useState(null);

  const STORAGE_KEY = "local-data";

  useEffect(() => {
    const saveData = get(STORAGE_KEY);

    if (saveData?.saveValueStart) {
      setValueStart(saveData.saveValueStart);
    };
    if(saveData?.saveValueEnd) {
      setValueEnd(saveData.saveValueEnd);
    };
  }, []);

  const handleChangeStart = (e) => {
    setValueStart(e);
    const data = new Date(e)
    const saveData = get(STORAGE_KEY);
    save(STORAGE_KEY, { ...saveData, saveValueStart:data.toString()});
  };

    const handleChangeEnd = (e) => {
      setValueEnd(e);
      const data = new Date(e)
      const saveData = get(STORAGE_KEY);
    save(STORAGE_KEY, {...saveData, saveValueEnd:data.toString() });
  }

  useEffect(() => {
    if (valueStart !== null && valueEnd !== null) {
      const amountOfDays = Math.ceil(
        (valueEnd - valueStart) / (1000 * 3600 * 24)
      );
      if (amountOfDays <= 0) {
        toast("The end date of the workout must be greater than the start date of the workout", {
          className: `${s.tost__background}`,
          bodyClassName: `${s.tost__body}`,
          progressClassName: `${s.progress__bar}`
        });
        return;
      }
      addStartTraining(valueStart);
            // addStartTraining(valueStart.getTime());
      addEndTraining(valueEnd);
      // addEndTraining(valueEnd.getTime());
      addAmountOfDaysTraining(amountOfDays);
    }
  }, [valueStart, valueEnd, addStartTraining, addEndTraining, addAmountOfDaysTraining]);

  return (
    <>
      <div className={s.planningForm__wrapper}>
        <div className={s.top__wrapper}>
          <div className={s.title__wrapper}>
            <h3 className={s.title}>My training</h3>
          </div>
        </div>
        <div className={s.calendar__wrapper}>
          <div className={s.input__wrapper}>
            <DateTimePicker
              onChange={handleChangeStart}
              value={valueStart}
              minDate={new Date()}
              calendarIcon={<img alt="button" src={polygonIconSvg} />}
              clearIcon={null}
              className={s.datetime__picker}
              calendarClassName={s.react__calendar}
              disableClock={true}
              format="dd.MM.yyyy HH:mm"
              placeholderText="Start"
            />
          </div>
          <div className={s.input__wrapper}>
            <DateTimePicker
              onChange={handleChangeEnd}
              value={valueEnd}
              minDate={ new Date(Date.now() + 24 * 60 * 60 * 1000)}
              clearIcon={null}
              className={s.datetime__picker}
              calendarClassName={s.react__calendar}
              disableClock={true}
              format="dd.MM.yyyy HH:mm"
              placeholderText={"Finish"}
              calendarIcon={<img alt="button" src={polygonIconSvg} />}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PlanningForm;
