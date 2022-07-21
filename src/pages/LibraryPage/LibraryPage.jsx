import { useEffect, useState } from "react";
import AddBookForm from "../../components/AddBookForm/AddBookForm";
import { LibraryModal } from "../../components/LibraryModal/LibraryModal";
import { Plus } from "../../components/MainNav/icons/Plus";
import Modal from "../../components/Modal/Modal";
import MediaQuery from "react-responsive";

import GoingToReadList from "../../components/GoingToReadList/GoingToReadList";

import s from "./LibraryPage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getAllBooks } from "redux/book/bookOperations";
import bookSelectors from "../../redux/book/bookSelectors";
import AlreadyReadList from "components/AlreadyReadList";

const LibraryPage = () => {
  const dispatch = useDispatch();

  const [next, setNext] = useState(false);

  const booksGoingToRead = useSelector(bookSelectors.getListGoingToRead);
  const booksInReading = useSelector(bookSelectors.getListInReading);
  const booksFinished = useSelector(bookSelectors.getListFinished);

  const [modal, setModal] = useState({
    open: false,
    content: null,
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
      {booksGoingToRead.length ? (
        <>
          {next ? (
            <>
              {AlreadyReadList.length > 0 ? (
                <>
                  <p className={s.sectionTitle}>Already read</p>
                  <AlreadyReadList library={booksFinished} />
                </>
              ) : null}

              {booksInReading.length > 0 ? (
                <>
                  <p className={s.sectionTitle}>Reading now</p>
                  <GoingToReadList
                    library={booksInReading}
                    type={"booksInReading"}
                  />
                </>
              ) : null}
              <p className={s.sectionTitle}>Going to read</p>
              <GoingToReadList
                library={booksGoingToRead}
                type={"booksGoingToRead"}
              />
            </>
          ) : (
            <>
              <p className={s.sectionTitle}>Going to read</p>
              <GoingToReadList
                library={booksGoingToRead}
                type={booksGoingToRead}
              />
              <button className={s.button} onClick={() => setNext(true)}>
               <span className={s.buttonText}>Next</span> 
              </button>
            </>
          )}
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
