import React, { useState } from 'react';
import s from './PlanningForm.module.scss';
// import calendarIconSvg from '../../assets/svg/calendar1.svg';
import polygonIconSvg from '../../assets/svg/polygon1.svg';
import DateTimePicker from 'react-datetime-picker';



const PlanningForm = () => {


    const [valueStart, setValueStart] = useState(null);
    const [valueEnd, setValueEnd] = useState(null);
       
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
              <DateTimePicker onChange={setValueStart} value={valueStart} minDate={new Date()} calendarIcon={<img alt="" src={polygonIconSvg}/>} clearIcon={null} className={s.datetime__picker} disableClock={true} format="dd.MM.yyyy HH:mm" placeholderText="Start"/>
            </div>
            <div className={s.input__wrapper}>
              <DateTimePicker onChange={setValueEnd} value={valueEnd} minDate={valueStart} clearIcon={null} className={s.datetime__picker} disableClock={true} format="dd.MM.yyyy HH:mm" placeholder={"Finish"} calendarIcon={<img alt="" src={polygonIconSvg}/>} />
            </div>
          </div>
        </div>

    
      </>
    //компонент в котором два инпута с календарем даты начала и окончания
   );
}

export default PlanningForm;