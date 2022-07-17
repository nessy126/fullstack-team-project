import React, { useState } from "react";
import s from "./PlanningForm.module.scss";
// import calendarIconSvg from '../../assets/svg/calendar1.svg';
import polygonIconSvg from "../../assets/svg/polygon1.svg";
import DateTimePicker from "react-datetime-picker";

const PlanningForm = () => {
  const [valueStart, setValueStart] = useState(null);
  const [valueEnd, setValueEnd] = useState(null);


  if (valueStart!==null && valueEnd!==null){
    const amountOfDays = Math.ceil(
      (valueEnd - valueStart) / (1000 * 3600 * 24)
    );
    if(amountOfDays<0){
      alert("Дата завершения тренировки должна быть больше даты начала тренировки")
    }
  }

  const dateFin = new Date();
  // console.log(dateFin.getTime())
  // console.log(new Date(2017, 0, 1))
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
              onChange={setValueStart}
              value={valueStart}
              minDate={new Date()}
              calendarIcon={<img alt="" src={polygonIconSvg} />}
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
              onChange={setValueEnd}
              value={valueEnd}
              minDate={valueStart || new Date(Date.now() + 24 * 60 * 60 * 1000)}
              clearIcon={null}
              className={s.datetime__picker}
              calendarClassName={s.react__calendar}
              disableClock={true}
              format="dd.MM.yyyy HH:mm"
              placeholderText={"Finish"}
              calendarIcon={<img alt="" src={polygonIconSvg} />}
            />
          </div>
        </div>
      </div>
    </>
    //компонент в котором два инпута с календарем даты начала и окончания
  );
};
// selected.date.add(1, 'days')
export default PlanningForm;
