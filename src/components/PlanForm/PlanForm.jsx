import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { get, updateStorage } from "utils/localStorage/localStorage";
import { STORAGE_KEY } from "assets/const";
import InputCalendar from "components/InputCalendar";
import PlanTitle from "components/PlanTitle";
import s from "./PlanForm.module.scss";
import PropTypes from "prop-types";

const PlanForm = ({
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
      <div className={s.PlanForm__wrapper}>
        <PlanTitle text="My training" />
        <div className={s.calendar__wrapper}>
          <div className={s.input__wrapper}>
            <InputCalendar
              getHandleChange={handleChangeStart}
              minDate={new Date()}
              value={valueStart}
              placeholderText="Start"
            />
          </div>
          <div className={s.input__wrapper}>
            <InputCalendar
              getHandleChange={handleChangeEnd}
              minDate={new Date(Date.now() + 24 * 60 * 60 * 1000)}
              value={valueEnd}
              placeholderText="Finish"
            />
          </div>
        </div>
      </div>
    </>
  );
};

PlanForm.propTypes = {
  addStartTraining: PropTypes.func.isRequired,
  addEndTraining: PropTypes.func.isRequired,
  addAmountOfDaysTraining: PropTypes.func.isRequired,
};

export default PlanForm;
