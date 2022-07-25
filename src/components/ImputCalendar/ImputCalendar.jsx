import Calendar from "react-calendar";
import { useState, useEffect, useCallback } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { FiCalendar } from "react-icons/fi";
import { IconContext } from "react-icons";
import ButtonIcon from "components/ButtonIcon";

import s from "./ImputCalendar.module.scss";

const ImputCalendar = (props) => {
  // const { type } = props;
  const [isActive, setIsActive] = useState(false);
  const [selectedDate, setselectedDate] = useState("");

  if (selectedDate !== "") {
    selectedDate.getTime();
    console.log(selectedDate.toLocaleDateString());
  }
  // console.log(selectedDate.getDate());
  // const [selectedDate, setselectedDate] = useState(new Date());
  const [valueInput, setValueInput] = useState("");

  // При нажатии на клавишу ESС селект закрывается и инпут очищается
  const closeSelectByEsc = useCallback(
    (e) => {
      if (e.code === "Escape") {
        setIsActive(false);
        setValueInput("");
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
    setValueInput("");
  };
  //
  const handleChange = (e) => {
    setselectedDate(e);
    setIsActive(!isActive);
    const data = new Date(e);
    // updateStorage(STORAGE_KEY, "saveValueStart", data.toString());
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
        <input
          className={s.dropdown__input}
          name="inputName"
          value={selectedDate.toLocaleDateString()}
          onChange={() => console.log("value")}
          placeholder="Start"
          readOnly
        />
        <ButtonIcon onClick={handleClick} type="caretDown" />
      </div>
      {isActive && (
        <div>
          <Calendar onChange={handleChange} value={selectedDate} />
        </div>
      )}
    </div>
  );
};

export default ImputCalendar;
