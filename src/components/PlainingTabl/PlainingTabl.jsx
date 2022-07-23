import s from "./PlainingTabl.module.scss";
import { useSelector } from "react-redux";
import { MdMenuBook } from "react-icons/md";
import Media from "react-media";
import PlainingItem from "components/PlainingItem";
import Loader from "components/Loader";

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
              <ul className={s.column__list}>
                {books?.map((book) => {
                  return (
                    <PlainingItem
                      key={book._id}
                      type="column"
                      deletItemFromList={deletItemFromList}
                      book={book}
                    />
                  );
                })}
              </ul>
            ) : (
              <div className={s.column__list}>
                <div className={s.column__flex}>
                  <div className={s.column__icon}>
                    <MdMenuBook
                      style={{ width: "22", height: "17", color: "#A6ABB9" }}
                    />
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
                <>
                  <div className={s.tableScrollBox}>
                    {isLoading ? (
                      <Loader />
                    ) : (
                      <ul className={s.table__list}>
                        {books?.map((book) => {
                          return (
                            <PlainingItem
                              key={book._id}
                              type="table"
                              deletItemFromList={deletItemFromList}
                              book={book}
                            />
                          );
                        })}
                      </ul>
                    )}
                  </div>
                </>
              ) : (
                <>
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
                </>
              )}
            </div>
          )}
        </>
      )}
    </Media>
  );
};

export default PlaningTabl;
