import { MdOutlineDeleteOutline } from "react-icons/md";
import { IconContext } from "react-icons";
import PropTypes from "prop-types";
import s from "./ButtonIcon.module.scss";

const ButtonIcon = ({ type, onClick, id }) => {
  return (
    <>
      {type === "addActive" && (
        <button type="button" onClick={onClick} className={s.select__button}>
          Add
        </button>
      )}
      {type === "addDisabled" && (
        <button
          type="button"
          disabled
          onClick={onClick}
          className={s.select__button}
        >
          Add
        </button>
      )}
      {type === "btnStart" && (
        <div className={s.button__wrapper}>
          <button type="button" onClick={onClick} className={s.start__button}>
            Start training
          </button>
        </div>
      )}
      {type === "deleteOutlineTable" && (
        <button
          type="button"
          onClick={onClick}
          id={id}
          className={s.table__btn}
        >
          <IconContext.Provider
            value={{
              className: `${s.icon__del}`,
              style: {
                width: "100%",
                height: "100%",
              },
            }}
          >
            <MdOutlineDeleteOutline />
          </IconContext.Provider>
        </button>
      )}
      {type === "deleteOutlineColumn" && (
        <button
          type="button"
          onClick={onClick}
          id={id}
          className={s.column__btn}
        >
          <IconContext.Provider
            value={{
              className: `${s.icon__del}`,
              style: {
                width: "100%",
                height: "100%",
              },
            }}
          >
            <MdOutlineDeleteOutline />
          </IconContext.Provider>
        </button>
      )}
    </>
  );
};
ButtonIcon.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string,
};
export default ButtonIcon;
