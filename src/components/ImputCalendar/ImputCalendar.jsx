import Calendar from 'react-calendar';
import { useState, useEffect, useCallback } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { IconContext } from "react-icons";
import s from "./ImputCalendar.module.scss";


const ImputCalendar = () => {
  const [isActive, setIsActive] = useState(false);
  const [filterBook, setFilterBook] = useState('');
    const [value, setValue] = useState(new Date());

  // При нажатии на клавишу ESС селект закрывается и инпут очищается 
  const closeSelectByEsc = useCallback(
    (e) => {
      if (e.code === "Escape") {
        setIsActive(false);
        setValue(null);
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
        setValue(null);
  };
  const handleChange = (e) => {
      console.log(e)
    setValue(e);
    setIsActive(!isActive);
    const data = new Date(e)
    // updateStorage(STORAGE_KEY, "saveValueStart", data.toString());
  };
  
  
  return (
    <div className={s.dropdown}>
      <div className={s.dropdown__wrapper} >
        <input className={s.dropdown__input}
          type="text"
          name="filter"
          value={value}
          // onChange={onChange}
          placeholder="Start" />
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
          </IconContext.Provider></button>
      </div>
      {isActive && (<div>
        <Calendar onChange={handleChange} value={value} />
      </div>)}
      
    </div>
  );
}

export default ImputCalendar;