import s from "./PlainingItem.module.scss";
import {  MdOutlineDeleteOutline, MdMenuBook } from 'react-icons/md';
import { IconContext } from "react-icons";

const PlainingItem = (props) => {
  const { type, book, deletItemFromList } = props;
  return (<>
    <li className={type === "column" ? s.column__item : s.table__item} >
      {type === "column" ?
        (<>
          <div className={s.column__flex}>
          <div className={s.column__icon}>
            <IconContext.Provider
              value={{
                className: `${s.icon__book}`,
                style: {
                  width: "100%",
                  height: "100%",
                },
              }}>
              <MdMenuBook />
            </IconContext.Provider>
          </div>
          <div className={s.column__title}>{book.title}</div>
          <button type="button"
            onClick={deletItemFromList}
            id={book._id}
            className={s.column__btn}>
            <IconContext.Provider
              value={{
                className: `${s.icon__del}`,
                style: {
                  width: "100%",
                  height: "100%",
                },
              }}>
              <MdOutlineDeleteOutline />
            </IconContext.Provider>
          </button>
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
        </>) :
        (<>
          <div className={s.table__icon}>
          <IconContext.Provider
            value={{
              className: `${s.icon__book}`,
              style: {
                width: "100%",
                height: "100%",
              },
            }}>
            <MdMenuBook />
          </IconContext.Provider>
        </div>
          <div className={s.table__title}>{book.title}</div>
          <div className={s.table__author}>{book.author}</div>
          <div className={s.table__year}>{book.year}</div>
          <div className={s.table__pagesTotal}>{book.pageTotal}</div>
          <button type="button"
            onClick={deletItemFromList}
            id={book._id}
            className={s.table__btn}> <IconContext.Provider
              value={{
                className: `${s.icon__del}`,
                style: {
                  width: "100%",
                  height: "100%",
                },
              }}>
              <MdOutlineDeleteOutline />
            </IconContext.Provider>
          </button>
        </>)
      }
    </li>
  </>
  );
}

export default PlainingItem;