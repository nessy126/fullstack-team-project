import Calendar from 'react-calendar';
import { useState, useEffect, useCallback } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { IconContext } from "react-icons";
import s from "./ImputCalendar.module.scss";


const ImputCalendar = () => {
  const [isActive, setIsActive] = useState(false);
  const [selectedDate, setselectedDate] = useState(new Date());
  const [valueInput, setValueInput] = useState('');

  // При нажатии на клавишу ESС селект закрывается и инпут очищается 
  const closeSelectByEsc = useCallback(
    (e) => {
      if (e.code === "Escape") {
        setIsActive(false);
        setValueInput('');
      }
    }, [setIsActive]);

  useEffect(() => {
    window.addEventListener("keydown", closeSelectByEsc);
    return () => {
      window.removeEventListener("keydown", closeSelectByEsc);
    };
  }, [closeSelectByEsc]);

      // При клике по иконке треугольника в инпуте, очищается инпут и открывается/закрывается селект
    const handleClick = () => {
        setIsActive(!isActive);
        setValueInput('');
  };
  // 
  const handleChange = (e) => {
    console.log(e)
    setselectedDate(e)
    console.log(selectedDate)
    setIsActive(!isActive);
    const data = new Date(e)
    // updateStorage(STORAGE_KEY, "saveValueStart", data.toString());
  }; 
  // const onChange = (e) => {
  //   console.log(e)
  //   setValueInput(e);
  //   console.log(valueInput)
  // }
  
  
  return (
    <div className={s.dropdown}>
      <div className={s.dropdown__wrapper} >
        <input className={s.dropdown__input}
          name="inputName"
          value={selectedDate}
          // onChange={()=>console.log('value')}
          placeholder="Start"
          readOnly/>
        <button type="button" onClick={handleClick} className={s.dropdown__btn}>
          <IconContext.Provider
            value={{
              className: `${s.react__icon}`,
              style: {
                width: "17px",
                height: "15px",
              },
            }}>
            <AiFillCaretDown />
          </IconContext.Provider>
        </button>
      </div>
      {isActive && (<div>
        <Calendar onChange={handleChange} value={selectedDate} />
      </div>)}
      
    </div>
  );
}

export default ImputCalendar;