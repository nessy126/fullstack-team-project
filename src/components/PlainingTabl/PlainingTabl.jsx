import { useSelector } from "react-redux";
import { MdMenuBook } from "react-icons/md";
import { IconContext } from "react-icons";
import Media from "react-media";
import Loader from "components/Loader";
import PlanList from "components/PlanList";
import PropTypes from "prop-types";
import s from "./PlainingTabl.module.scss";
const PlaningTabl = ({ books, handleDelBook }) => {
  const deletItemFromList = (e) => {
    handleDelBook(e);
  };
  const isLoading = useSelector((state) => state.books.isLoading);
  const show = books?.length > 0 ? true : false;
  return (
    <Media
      queries={{
        small: "(max-width: 767px)",
        medium: "(min-width: 768px)",
      }}
    >
      {(matches) => (
        <>
          {matches.small &&
            (show ? (
              <PlanList
                books={books}
                type="column"
                deletItemFromList={deletItemFromList}
              />
            ) : (
              <div className={s.column__list}>
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
                  <div className={s.column__title}>...</div>
                </div>
                <div className={s.column__flex}>
                  <div className={s.column__right}>Author:</div>
                  <div className={s.column__left}>...</div>
                </div>
                <div className={s.column__flex}>
                  <div className={s.column__right}>Year:</div>
                  <div className={s.column__left}>...</div>
                </div>
                <div className={s.column__flex}>
                  <div className={s.column__right}>Page:</div>
                  <div className={s.column__left}>...</div>
                </div>
              </div>
            ))}
          {matches.medium && (
            <div className={s.table__wrapper}>
              <div className={show ? s.table__top : s.table__topEmpty}>
                <span>Book title</span>
                <span>Author</span>
                <span>Year</span>
                <span>Page</span>
              </div>
              {show ? (
                <div className={s.tableScrollBox}>
                  {isLoading ? (
                    <Loader />
                  ) : (
                    <PlanList
                      books={books}
                      type="table"
                      deletItemFromList={deletItemFromList}
                    />
                  )}
                </div>
              ) : (
                <div className={s.table__bottomEmpty}>
                  <div className={s.table__icon}>
                    <MdMenuBook
                      style={{
                        width: "22",
                        height: "17",
                        color: "#A6ABB9",
                      }}
                    />
                  </div>
                  <div className={s.table__titleEmpty}>...</div>
                </div>
              )}
            </div>
          )}
        </>
      )}
    </Media>
  );
};
PlaningTabl.propTypes = {
  handleDelBook: PropTypes.func.isRequired,
  books: PropTypes.array,
};
export default PlaningTabl;
