import s from "./PlainingItem.module.scss";
import { MdMenuBook } from "react-icons/md";
import { IconContext } from "react-icons";
import PropTypes from "prop-types";
import ButtonReactIcon from "components/ButtonReactIcon";
import { MdOutlineDeleteOutline } from "react-icons/md";

const PlainingItem = ({ type, book, deletItemFromList }) => {
  return (
    <li className={type === "column" ? s.column__item : s.table__item}>
      {type === "column" ? (
        <>
          <div className={s.column__flex}>
            <div className={s.column__icon}>
              <IconContext.Provider
                value={{
                  className: `${s.icon__book}`,
                  style: {
                    width: "100%",
                    height: "100%",
                  },
                }}
              >
                <MdMenuBook />
              </IconContext.Provider>
            </div>
            <div className={s.column__title}>{book.title}</div>
            <ButtonReactIcon
              onClick={deletItemFromList}
              name="deleteOutlineColumn"
              id={book._id}
            >
              <MdOutlineDeleteOutline />
            </ButtonReactIcon>
          </div>
          <div className={s.column__flex}>
            <div className={s.column__right}>Author:</div>
            <div className={s.column__left}>{book.author}</div>
          </div>
          <div className={s.column__flex}>
            <div className={s.column__right}>Year:</div>
            <div className={s.column__left}>{book.year}</div>
          </div>
          <div className={s.column__flex}>
            <div className={s.column__right}>Page:</div>
            <div className={s.column__left}>{book.pageTotal}</div>
          </div>
        </>
      ) : (
        <>
          <div className={s.table__icon}>
            <IconContext.Provider
              value={{
                className: `${s.icon__book}`,
                style: {
                  width: "100%",
                  height: "100%",
                },
              }}
            >
              <MdMenuBook />
            </IconContext.Provider>
          </div>
          <div className={s.table__title}>{book.title}</div>
          <div className={s.table__author}>{book.author}</div>
          <div className={s.table__year}>{book.year}</div>
          <div className={s.table__pagesTotal}>{book.pageTotal}</div>
          <ButtonReactIcon
            onClick={deletItemFromList}
            name="deleteOutlineTable"
            id={book._id}
          >
            <MdOutlineDeleteOutline />
          </ButtonReactIcon>
        </>
      )}
    </li>
  );
};
PlainingItem.propTypes = {
  type: PropTypes.string.isRequired,
  book: PropTypes.object,
  deletItemFromList: PropTypes.func.isRequired,
};

export default PlainingItem;
