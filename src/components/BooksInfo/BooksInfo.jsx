import MediaQuery from "react-responsive";
import s from "./BooksInfo.module.scss";

const BooksInfo = ({ type }) => {
  return (
    <>
      {type === "alreadyRead" ? (
        <MediaQuery maxWidth={767}>
          <div className={s.bookInfo}>
            <p className={s.bookInfoText}>Author:</p>
            <p className={s.bookInfoText}>Year:</p>
            <p className={s.bookInfoText}>Pages:</p>
            <p className={s.bookInfoText}>Rating:</p>
          </div>
        </MediaQuery>
      ) : (
        <MediaQuery maxWidth={767}>
          <div className={s.bookInfoGR}>
            <p className={s.bookInfoTextGR}>Author</p>
            <p className={s.bookInfoTextGR}>Year</p>
            <p className={s.bookInfoTextGR}>Pages</p>
          </div>
        </MediaQuery>
      )}
    </>
  );
};

export default BooksInfo;
