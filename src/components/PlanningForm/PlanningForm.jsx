import React, { useState, useEffect } from "react";
import s from "./PlanningForm.module.scss";
import polygonIconSvg from "../../assets/svg/polygon1.svg";
import DateTimePicker from "react-datetime-picker";
import { toast } from "react-toastify";
import { get, updateStorage } from "utils/localStorage/localStorage";
import { STORAGE_KEY } from "assets/const";
import ImputCalendar from "./../ImputCalendar/ImputCalendar";

const PlanningForm = ({
  addStartTraining,
  addEndTraining,
  addAmountOfDaysTraining,
}) => {
  const [valueStart, setValueStart] = useState(null);
  const [valueEnd, setValueEnd] = useState(null);

  useEffect(() => {
    const saveData = get(STORAGE_KEY);
    if (saveData?.saveValueStart) {
      setValueStart(new Date(saveData?.saveValueStart));
    }
    if (saveData?.saveValueEnd) {
      setValueEnd(new Date(saveData.saveValueEnd));
    }
  }, []);

  const handleChangeStart = (e) => {
    setValueStart(e);
    const data = new Date(e);
    updateStorage(STORAGE_KEY, "saveValueStart", data.toString());
  };

  const handleChangeEnd = (e) => {
    setValueEnd(e);
    const data = new Date(e);
    updateStorage(STORAGE_KEY, "saveValueEnd", data.toString());
  };

  useEffect(() => {
    if (valueStart !== null && valueEnd !== null) {
      const amountOfDays = Math.ceil(
        (valueEnd - valueStart) / (1000 * 3600 * 24)
      );
      if (amountOfDays <= 0) {
        toast.error(
          "The end date of the workout must be greater than the start date of the workout"
        );
        return;
      }
      addStartTraining(valueStart);
      addEndTraining(valueEnd);
      addAmountOfDaysTraining(amountOfDays);
    }
  }, [
    valueStart,
    valueEnd,
    addStartTraining,
    addEndTraining,
    addAmountOfDaysTraining,
  ]);

  return (
    <>
      <div className={s.planningForm__wrapper}>
        <div className={s.top__wrapper}>
          <div className={s.title__wrapper}>
            <h3 className={s.title}>My training</h3>
          </div>
        </div>
        <div className={s.calendar__wrapper}>
          <ImputCalendar
            getHandleChange={handleChangeStart}
            minDate={new Date()}
            value={valueStart}
            placeholderText="Start"
          />
          <ImputCalendar
            getHandleChange={handleChangeEnd}
            minDate={new Date(Date.now() + 24 * 60 * 60 * 1000)}
            value={valueEnd}
            placeholderText={"Finish"}
          />
          {/* <div className={s.input__wrapper}>
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
          </div> */}
          {/* <div className={s.input__wrapper}>
            <DateTimePicker
              onChange={handleChangeEnd}
              value={valueEnd}
              minDate={new Date(Date.now() + 24 * 60 * 60 * 1000)}
              clearIcon={null}
              className={s.datetime__picker}
              calendarClassName={s.react__calendar}
              disableClock={true}
              format="dd.MM.yyyy HH:mm"
              placeholderText={"Finish"}
              calendarIcon={<img alt="button" src={polygonIconSvg} />}
            />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default PlanningForm;
