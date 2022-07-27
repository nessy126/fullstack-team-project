import Media from "react-media";
import { HiOutlinePlus, HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { AiFillCaretDown } from "react-icons/ai";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { IconContext } from "react-icons";
import PropTypes from "prop-types";
import s from "./ButtonIcon.module.scss";

const ButtonIcon = ({ type, onClick, id }) => {
  return (
    <>
      <Media
        queries={{
          small: "(max-width: 767px)",
          medium: "(min-width: 768px )",
        }}
      >
        {(matches) =>
          matches.small && (
            <>
              {type === "arrow" && (
                <button
                  className={s.button__arrow}
                  type="button"
                  onClick={onClick}
                >
                  <IconContext.Provider
                    value={{
                      className: `${s.icon__arrow}`,
                      style: {
                        width: "100%",
                        height: "100%",
                      },
                    }}
                  >
                    <HiOutlineArrowNarrowLeft />
                  </IconContext.Provider>
                </button>
              )}
              {type === "plus" && (
                <button
                  className={s.button__plus}
                  type="button"
                  onClick={onClick}
                >
                  <IconContext.Provider
                    value={{
                      className: `${s.react__icon}`,
                      style: {
                        width: "16px",
                        height: "16px",
                      },
                    }}
                  >
                    <HiOutlinePlus />
                  </IconContext.Provider>
                </button>
              )}
            </>
          )
        }
      </Media>
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
      {type === "caretDown" && (
        <button className={s.dropdown__btn} type="button" onClick={onClick}>
          <IconContext.Provider
            value={{
              className: `${s.react__caretDown}`,
              style: {
                width: "100%",
                height: "100%",
              },
            }}
          >
            <AiFillCaretDown />
          </IconContext.Provider>
        </button>
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
