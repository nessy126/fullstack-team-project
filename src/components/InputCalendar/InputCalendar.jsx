import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import { FiCalendar } from "react-icons/fi";
import { IconContext } from "react-icons";
import ButtonIcon from "components/ButtonIcon";
import { useMouseClose } from "hooks/useCloseSelect";
import s from "./InputCalendar.module.scss";
import PropTypes from "prop-types";
import { useCloseByEsc } from "hooks/useCloseByEsc";

const InputCalendar = (props) => {
  const { placeholderText, getHandleChange, minDate, value } = props;
  const [isActive, setIsActive] = useState(false);

  // Для закрытия кликом по экрану ввели функцию closeSelect, которая передается вместе с флагом как параметры в кастомный хук useMouseClose (который вешает слушателя на document при открытом селекте и снимает его при закрытии селекта)
  const closeSelect = () => {
    setIsActive(false);
  };
  const ulRef = useMouseClose(closeSelect, isActive);

  // При нажатии на клавишу ESС селект закрывается
  useCloseByEsc(closeSelect, isActive);

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
InputCalendar.propTypes = {
  placeholderText: PropTypes.string.isRequired,
  getHandleChange: PropTypes.func.isRequired,
  minDate: PropTypes.instanceOf(Date).isRequired,
  value: PropTypes.any,
};

export default InputCalendar;
