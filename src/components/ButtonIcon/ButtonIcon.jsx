import Media from "react-media";
import { HiOutlinePlus, HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { IconContext } from "react-icons";
import s from "./ButtonIcon.module.scss";

const ButtonIcon = (props) => {
  const { type, onClick } = props;

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
    </>
  );
};

export default ButtonIcon;
