import Calendar from "react-calendar";
import { useState, useEffect, useCallback } from "react";
import { FiCalendar } from "react-icons/fi";
import { IconContext } from "react-icons";
import ButtonIcon from "components/ButtonIcon";

import s from "./ImputCalendar.module.scss";

const ImputCalendar = (props) => {
  const { placeholderText, getHandleChange, minDate, value } = props;
  const [isActive, setIsActive] = useState(false);
  const [selectedDate, setselectedDate] = useState("");
  // const [valueInput, setValueInput] = useState("");
  // let string = "";

  // useEffect(() => {
  //   if (selectedDate !== "") {
  //     string = selectedDate.toLocaleDateString();
  //   }
  // }, [selectedDate]);

  // При нажатии на клавишу ESС календарь закрывается и инпут очищается
  const closeSelectByEsc = useCallback(
    (e) => {
      if (e.code === "Escape") {
        setIsActive(false);
        // setValueInput("");
      }
    },
    [setIsActive]
  );
  useEffect(() => {
    window.addEventListener("keydown", closeSelectByEsc);
    return () => {
      window.removeEventListener("keydown", closeSelectByEsc);
    };
  }, [closeSelectByEsc]);

  // При клике по иконке треугольника в инпуте, очищается инпут и открывается/закрывается селект
  const handleClick = () => {
    setIsActive(!isActive);
    // setValueInput("");
  };
  //Вытягивает выбранную дату из календаря, закрывает календарь, передает выбранную дату выше
  const handleChange = (e) => {
    setselectedDate(e.toLocaleDateString());
    getHandleChange(e);
    setIsActive(!isActive);
  };

  return (
    <div className={s.dropdown}>
      <div className={s.dropdown__wrapper}>
        <IconContext.Provider
          value={{
            className: `${s.react__fiCalendar}`,
            style: {
              width: "17px",
              height: "17px",
            },
          }}
        >
          <FiCalendar />
        </IconContext.Provider>
        <div className={s.dropdown__input} placeholder="Start">
          {selectedDate || placeholderText}
        </div>
        <ButtonIcon onClick={handleClick} type="caretDown" />
      </div>
      {isActive && (
        <div>
          <Calendar
            onChange={handleChange}
            value={value}
            className={s.react__calendar}
            minDate={minDate}
          />
        </div>
      )}
    </div>
  );
};

export default ImputCalendar;
