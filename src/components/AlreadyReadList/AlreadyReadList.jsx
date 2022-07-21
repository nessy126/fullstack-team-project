import s from "./AlreadyReadList.module.scss";

import MediaQuery from "react-responsive";
import OneCard from "./OneCard/OneCard";

const AlreadyReadList = ({ library }) => {
  return (
    <div className={s.container}>
      <MediaQuery minWidth={768}>
        <div className={s.bookInfo}>
          <p className={s.title}>Book title</p>
          <p className={s.author}>Author</p>
          <p className={s.year}>Year</p>
          <p className={s.page}>Pages</p>
          <p className={s.bookInfoText}>Rating</p>
        </div>
      </MediaQuery>
      <ul className={s.list}>
        {library.length > 0
          ? library.map(
              ({ _id: id, title, author, year, pageTotal, feedback }) => (
                <OneCard
                  key={id}
                  id={id}
                  title={title}
                  author={author}
                  year={year}
                  pages={pageTotal}
                  rating={feedback.rating}
                  comment={feedback.comment}
                />
              )
            )
          : null}
      </ul>
    </div>
  );
};

export default AlreadyReadList;
