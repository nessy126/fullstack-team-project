import s from "./AlreadyReadCard.module.scss";

import MediaQuery from "react-responsive";
import { FirstBook } from "assets/images/icons/FirstBook";
import { useState } from "react";
import Modal from "components/Modal/Modal";
import FormReview from "../FormReview/FormReview";
import Stars from "components/Stars/Stars";

const AlreadyReadCard = (book) => {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal({
      open: true,
    });
  };
  const closeModal = () => {
    setModal({
      open: false,
    });
  };

  const updatedBookTitle =
    book.title.length <= 30 ? book.title : book.title.slice(0, 29) + "...";

  const updatedBookAuthor =
    book.author.length <= 20 ? book.author : book.author.slice(0, 19) + "...";

  return (
    <li className={s.card}>
      <div className={s.iconTitle}>
        <div className={s.navIcon}>
          <FirstBook />
        </div>
        <p className={s.bookTitle}>{updatedBookTitle}</p>
      </div>
      <MediaQuery maxWidth={767}>
        {/* <MediaQuery minWidth={767}></MediaQuery> */}
        <div className={s.bookInfoWrapper}>
          <MediaQuery maxWidth={767}>
            <div className={s.bookInfo}>
              <p className={s.bookInfoText}>Author:</p>
              <p className={s.bookInfoText}>Year:</p>
              <p className={s.bookInfoText}>Pages:</p>
              <p className={s.bookInfoText}>Rating:</p>
            </div>
          </MediaQuery>

          <MediaQuery maxWidth={767}>
            <div className={s.bookMoreInfo}>
              <p
                className={
                  book.author.length > 30 ? s.bookMoreInfoAuthor : s.titleText
                }
              >
                {book.author}
              </p>
              <p className={s.bookMoreInfoYear}>{book.year}</p>
              <p className={s.bookMoreInfoPage}>{book.pages}</p>
              <div className={s.bookMoreInfoPage}>
                {book.rating ? (
                  <div className={s.marginStar}>
                    <Stars backRate={book.rating} />
                  </div>
                ) : (
                  <div className={s.marginStar}>
                    <Stars />
                  </div>
                )}
              </div>
            </div>
          </MediaQuery>
        </div>
      </MediaQuery>
      <MediaQuery minWidth={768}>
        <p className={updatedBookAuthor ? s.bookMoreInfoAuthor : s.titleText}>
          {updatedBookAuthor}
        </p>
        <p className={s.bookMoreInfoYear}>{book.year}</p>
        <p className={s.bookMoreInfoPage}>{book.pages}</p>
        {book.rating ? (
          <div className={s.marginStar}>
            <Stars backRate={book.rating} />
          </div>
        ) : (
          <div className={s.marginStar}>
            <Stars />
          </div>
        )}
      </MediaQuery>
      <button className={s.button} onClick={() => openModal()}>
        <span className={s.buttonText}>resume</span>
      </button>
      {modal.open && (
        <Modal type="exit" closeModal={closeModal}>
          <FormReview
            closeModal={closeModal}
            id={book.id}
            backRate={book.rating}
            comment={book.comment}
          />
        </Modal>
      )}
    </li>
  );
};

export default AlreadyReadCard;
