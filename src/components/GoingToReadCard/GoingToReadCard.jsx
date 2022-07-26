import s from "./GoingToReadCard.module.scss";

import { FirstBook } from "assets/images/icons/FirstBook";
import { OrangeBook } from "assets/images/icons/OrangeBook";
import BooksInfo from "components/BooksInfo";

const GoingToReadCard = (book) => {
  //   const dispatch = useDispatch();

  return (
    <li className={s.card}>
      <div className={s.iconTitle}>
        <div className={s.navIcon}>
          {book.type === "booksInReading" ? <OrangeBook /> : <FirstBook />}
        </div>
        <p className={s.bookTitle}>{book.title}</p>
      </div>
      <div className={s.bookInfoWrapper}>
        <BooksInfo />
        <div className={s.bookMoreInfo}>
          <p
            className={
              book.author.length > 30 ? s.bookMoreInfoAuthor : s.authorText
            }
          >
            {book.author}
          </p>
          <p className={s.bookMoreInfoYear}>{book.year}</p>
          <p className={s.bookMoreInfoPage}>{book.pages}</p>
        </div>
      </div>
    </li>
  );
};

export default GoingToReadCard;
