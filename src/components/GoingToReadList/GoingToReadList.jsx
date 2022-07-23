import s from "./GoingToReadList.module.scss";

import MediaQuery from "react-responsive";
import GoingToReadCard from "../GoingToReadCard/GoingToReadCard";

const GoingToReadList = ({ library, type }) => {
  return (
    <>
      {type === "booksGoingToRead" ? (
        <p className={s.sectionTitle}>Going to read</p>
      ) : (
        <p className={s.sectionTitle}>Reading now</p>
      )}

      <div className={s.infoListContainer}>
        <MediaQuery minWidth={768}>
          <div className={s.bookColumns}>
            <p className={s.title}>Book title</p>
            <p className={s.author}>Author</p>
            <p className={s.year}>Year</p>
            <p className={s.page}>Pages</p>
          </div>
        </MediaQuery>
        <ul className={s.list}>
          {library.length > 0
            ? library.map(({ _id: id, title, author, year, pageTotal }) => (
                <GoingToReadCard
                  key={id}
                  id={id}
                  title={title}
                  author={author}
                  year={year}
                  pages={pageTotal}
                  type={type}
                />
              ))
            : null}
        </ul>
      </div>
    </>
  );
};

export default GoingToReadList;
