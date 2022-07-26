import { useEffect, useState } from "react";
import AddBookForm from "../../components/AddBookForm/AddBookForm";
import { LibraryModal } from "../../components/LibraryModal/LibraryModal";
import Modal from "../../components/Modal/Modal";
import MediaQuery from "react-responsive";
import GoingToReadList from "../../components/GoingToReadList/GoingToReadList";
import { useDispatch, useSelector } from "react-redux";
import { getAllBooks } from "redux/book/bookOperations";
import bookSelectors from "../../redux/book/bookSelectors";
import AlreadyReadList from "components/AlreadyReadList";
import s from "./LibraryPage.module.scss";
import { NextButton } from "components/LibraryButtons/LibraryButtons";
import { Plus } from "assets/images/icons/Plus";

const LibraryPage = () => {
  const dispatch = useDispatch();
  const booksGoingToRead = useSelector(bookSelectors.getListGoingToRead);
  const booksInReading = useSelector(bookSelectors.getListInReading);
  const booksFinished = useSelector(bookSelectors.getListFinished);

  const [modal, setModal] = useState({
    open: false,
  });

  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch]);

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

  return (
    <>
      <MediaQuery maxWidth={767}>
        <button className={s.phonePlusButton} onClick={() => openModal()}>
          <Plus />
        </button>
      </MediaQuery>
      <MediaQuery minWidth={768}>
        <AddBookForm closeModal={closeModal} />
      </MediaQuery>
      {booksGoingToRead?.length ||
      booksInReading?.length ||
      booksFinished?.length ? (
        <>
          <>
            {booksFinished?.length > 0 ? (
              <AlreadyReadList library={booksFinished} />
            ) : null}

            {booksInReading?.length > 0 ? (
              <GoingToReadList
                library={booksInReading}
                type={"booksInReading"}
              />
            ) : null}
            {booksGoingToRead?.length > 0 && (
              <GoingToReadList
                library={booksGoingToRead}
                type={"booksGoingToRead"}
              />
            )}
          </>
          <NextButton />
        </>
      ) : (
        <LibraryModal />
      )}
      {modal.open && (
        <Modal closeModal={closeModal}>
          <AddBookForm closeModal={closeModal} />
        </Modal>
      )}
    </>
  );
};

export default LibraryPage;
