import s from "./OneCard.module.scss";

import MediaQuery from "react-responsive";
import { FirstBook } from "components/MainNav/icons/FirstBook";
import { useState } from "react";
import Modal from "components/Modal/Modal";
import FormReview from "../../FormReview/FormReview";
import { FaStar } from "react-icons/fa";
import Stars from "components/Rating/Stars/Stars";

const OneCard = (book) => {
  //   const dispatch = useDispatch();

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
    book.title.length <= 30 ? book.title : book.title.slice(0, 30) + "...";

  const backRate = 5;

  return (
    <li className={s.card}>
      <div className={s.iconTitle}>
        <div className={s.navIcon}>
          <FirstBook />
        </div>
        <p className={s.bookTitle}>{updatedBookTitle}</p>
      </div>
      <div className={s.bookInfoWrapper}>
        <MediaQuery maxWidth={767}>
          <div className={s.bookInfo}>
            <p className={s.bookInfoText}>Author:</p>
            <p className={s.bookInfoText}>Year:</p>
            <p className={s.bookInfoText}>Pages:</p>
            <p className={s.bookInfoText}>Rating:</p>
          </div>
        </MediaQuery>
        <div className={s.bookMoreInfo}>
          <p className={s.bookMoreInfoAuthor}>{book.author}</p>
          <p className={s.bookMoreInfoYear}>{book.year}</p>
          <p className={s.bookMoreInfoPage}>{book.pages}</p>
          <div className={s.bookMoreInfoPage}>
            {backRate ? (
              <div className={s.marginStar}>
                <Stars backRate={backRate} />
              </div>
            ) : (
              <div className={s.marginStar}>
                <FaStar size={20} color={"#e4e5e9"} />
                <FaStar size={20} color={"#e4e5e9"} />
                <FaStar size={20} color={"#e4e5e9"} />
                <FaStar size={20} color={"#e4e5e9"} />
                <FaStar size={20} color={"#e4e5e9"} />
              </div>
            )}
          </div>
        </div>
      </div>
      <button className={s.button} onClick={() => openModal()}>
        <span className={s.buttonText}>resume</span>
      </button>
      {modal.open && (
        <Modal type={"exit"} closeModal={closeModal}>
          <FormReview closeModal={closeModal} />
        </Modal>
      )}
    </li>
  );
};

export default OneCard;
