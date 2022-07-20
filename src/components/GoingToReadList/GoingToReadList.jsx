import s from "./GoingToReadList.module.scss";
import OneCard from "./OneCard/OneCard";

import MediaQuery from "react-responsive";

const GoingToReadList = ({ library }) => {
  return (
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
    </div>
  );
};

export default GoingToReadList;
