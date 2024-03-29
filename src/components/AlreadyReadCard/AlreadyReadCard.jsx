import s from "./AlreadyReadCard.module.scss";

import MediaQuery from "react-responsive";
import { useState } from "react";
import Modal from "components/Modal/Modal";
import FormReview from "../FormReview/FormReview";
import Stars from "components/Stars/Stars";
import { AlreadyReadIcon } from "assets/images/icons/AlreadyReadIcon";
import BooksInfo from "components/BooksInfo";

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
    book.author.length <= 30 ? book.author : book.author.slice(0, 17) + "...";

  return (
    <li className={s.card}>
      <div className={s.iconTitle}>
        <div className={s.navIcon}>
          <AlreadyReadIcon />
        </div>
        <p className={s.bookTitle}>{updatedBookTitle}</p>
      </div>
      <MediaQuery maxWidth={767}>
        <div className={s.bookInfoWrapper}>
          <BooksInfo type={"alreadyRead"} />
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
        <MediaQuery minWidth={768} maxWidth={1279}>
          <p className={updatedBookAuthor ? s.bookMoreInfoAuthor : s.titleText}>
            {updatedBookAuthor}
          </p>
        </MediaQuery>
        <MediaQuery minWidth={1280}>
          <p className={updatedBookAuthor ? s.bookMoreInfoAuthor : s.titleText}>
            {book.author}
          </p>
        </MediaQuery>
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
        <span className={s.buttonText}>Resume</span>
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
