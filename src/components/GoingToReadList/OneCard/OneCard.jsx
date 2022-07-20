import s from "./OneCard.module.scss";

import MediaQuery from "react-responsive";
import { FirstBook } from "components/MainNav/icons/FirstBook";
import { OrangeBook } from "components/MainNav/icons/OrangeBook";

const OneCard = (book) => {
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
        <MediaQuery maxWidth={767}>
          <div className={s.bookInfo}>
            <p className={s.bookInfoText}>Author</p>
            <p className={s.bookInfoText}>Year</p>
            <p className={s.bookInfoText}>Pages</p>
          </div>
        </MediaQuery>
        <div className={s.bookMoreInfo}>
          <p className={s.bookMoreInfoAuthor}>{book.author}</p>
          <p className={s.bookMoreInfoYear}>{book.year}</p>
          <p className={s.bookMoreInfoPage}>{book.pages}</p>
        </div>
      </div>
    </li>
  );
};

export default OneCard;
