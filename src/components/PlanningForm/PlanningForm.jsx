import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { get, updateStorage } from "utils/localStorage/localStorage";
import { STORAGE_KEY } from "assets/const";
import ImputCalendar from "components/ImputCalendar";
import s from "./PlanningForm.module.scss";

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
          <div className={s.input__wrapper}>
            <ImputCalendar
              getHandleChange={handleChangeStart}
              minDate={new Date()}
              value={valueStart}
              placeholderText="Start"
            />
          </div>
          <div className={s.input__wrapper}>
            <ImputCalendar
              getHandleChange={handleChangeEnd}
              minDate={new Date(Date.now() + 24 * 60 * 60 * 1000)}
              value={valueEnd}
              placeholderText={"Finish"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PlanningForm;
