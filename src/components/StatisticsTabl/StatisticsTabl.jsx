import s from "./StatisticsTable.module.scss";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProgressTraining } from "../../redux/training/trainingOperations";
import { getAllBooks } from "../../redux/auth/authSelectors";
import Media from "react-media";
import { MdMenuBook } from "react-icons/md";
const StatisticsTabl = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProgressTraining());
  }, [dispatch]);

  const allTraining = useSelector(getAllBooks);
  console.log("allTraining :>> ", allTraining);
  const show = allTraining?.length > 0 ? true : false;
  const isLoading = false;
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
                {allTraining?.map((book) => {
                  return (
                    <li key={book._id} className={s.column__item}>
                      <div className={s.column__flex}>
                        <div className={s.column__icon}>
                          <MdMenuBook
                            style={{
                              width: "22",
                              height: "17",
                              color: "#A6ABB9",
                            }}
                          />
                        </div>
                        <div className={s.column__title}>{book.title}</div>
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
                        <div className={s.column__right}>Pages:</div>
                        <div className={s.column__left}>{book.pageTotal}</div>
                      </div>
                    </li>
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
                  <div className={s.column__right}>Pages:</div>
                  <div className={s.column__left}>...</div>
                </div>
              </div>
            ))}
          {matches.medium && (
            <div className={s.table__wrapper}>
              {show ? (
                <>
                  <div className={s.table__top}>
                    <span>Book title</span>
                    <span>Author</span>
                    <span>Year</span>
                    <span>Pages</span>
                  </div>
                  <div className={s.tableScrollBox}>
                    {isLoading ? (
                      //   <InlineLoader />
                      <p>InlineLoader</p>
                    ) : (
                      <ul className={s.table__list}>
                        {allTraining?.map((book) => {
                          return (
                            <li key={book._id} className={s.table__item}>
                              <div className={s.table__icon}>
                                <MdMenuBook
                                  style={{
                                    width: "22",
                                    height: "17",
                                    color: "#A6ABB9",
                                  }}
                                />
                              </div>
                              <div className={s.table__title}>{book.title}</div>
                              <div className={s.table__author}>
                                {book.author}
                              </div>
                              <div className={s.table__year}>{book.year}</div>
                              <div className={s.table__pagesTotal}>
                                {book.pageTotal}
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <div className={s.table__topEmpty}>
                    <span>Book title</span>
                    <span>Author</span>
                    <span>Year</span>
                    <span>Pages</span>
                  </div>
                  <div className={s.table__bottomEmpty}>
                    <div className={s.table__icon}>
                      <MdMenuBook
                        style={{ width: "22", height: "17", color: "#A6ABB9" }}
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

export default StatisticsTabl;
