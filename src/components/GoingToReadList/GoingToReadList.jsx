import { useDispatch, useSelector } from "react-redux";
import { getAllBooks } from "redux/book/bookOperations";
import s from "./GoingToReadList.module.scss";
import OneCard from "./OneCard/OneCard";
import bookSelectors from "redux/book/bookSelectors";
import { useEffect } from "react";

const GoingToReadList = () => {
  const dispatch = useDispatch();
  const books = useSelector(bookSelectors.getListGoingToRead);

  return (
    <ul className={s.list}>
      {books.length > 0
        ? books.map(({ _id: id, title, author, year, pageTotal }) => (
            <OneCard
              key={id}
              id={id}
              title={title}
              author={author}
              year={year}
              pages={pageTotal}
            />
          ))
        : null}
    </ul>
  );
};

export default GoingToReadList;
