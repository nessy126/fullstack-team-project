import Calendar from "react-calendar";
import { useState, useEffect, useCallback } from "react";
import { FiCalendar } from "react-icons/fi";
import { IconContext } from "react-icons";
import ButtonIcon from "components/ButtonIcon";
import { useMouseClose } from "hooks/useCloseSelect";
import s from "./ImputCalendar.module.scss";
import "react-calendar/dist/Calendar.css";

const ImputCalendar = (props) => {
  const { placeholderText, getHandleChange, minDate, value } = props;
  const [isActive, setIsActive] = useState(false);

  // При нажатии на клавишу ESС календарь закрывается и инпут очищается
  const closeSelectByEsc = useCallback(
    (e) => {
      if (e.code === "Escape") {
        setIsActive(false);
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

  // Для закрытия кликом по экрану ввели функцию closeSelect, которая передается вместе с флагом как параметры в кастомный хук useMouseClose (который вешает слушателя на document при открытом селекте и снимает его при закрытии селекта)
  const closeSelect = () => {
    setIsActive(false);
  };
  const ulRef = useMouseClose(closeSelect, isActive);

  // При клике по иконке треугольника в инпуте, очищается инпут и открывается/закрывается селект
  const handleClick = () => {
    setIsActive(!isActive);
  };
  //Вытягивает выбранную дату из календаря, закрывает календарь, передает выбранную дату выше
  const handleChange = (e) => {
    getHandleChange(e);
    setIsActive(!isActive);
  };

  return (
    <div className={s.dropdown} ref={ulRef}>
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
          {value?.toLocaleDateString() || placeholderText}
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
