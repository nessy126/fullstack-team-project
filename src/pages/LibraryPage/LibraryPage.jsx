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
import {
  NextButton,
  PlusButton,
} from "components/LibraryButtons/LibraryButtons";

const LibraryPage = () => {
  const dispatch = useDispatch();
  const [next, setNext] = useState(false);
  const booksGoingToRead = useSelector(bookSelectors.getListGoingToRead);
  const booksInReading = useSelector(bookSelectors.getListInReading);
  const booksFinished = useSelector(bookSelectors.getListFinished);

  const [modal, setModal] = useState({
    open: false,
  });

  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch, booksFinished]);

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
      <PlusButton openModal={openModal} />
      <MediaQuery minWidth={768}>
        <AddBookForm closeModal={closeModal} />
      </MediaQuery>
      {booksGoingToRead.length ||
      booksInReading.length ||
      booksFinished.length ? (
        <>
          {next ? (
            <>
              {AlreadyReadList.length > 0 ? (
                <AlreadyReadList library={booksFinished} />
              ) : null}

              {booksInReading.length > 0 ? (
                <GoingToReadList
                  library={booksInReading}
                  type={"booksInReading"}
                />
              ) : null}
              {booksGoingToRead.length > 0 && (
                <GoingToReadList
                  library={booksGoingToRead}
                  type={"booksGoingToRead"}
                />
              )}
            </>
          ) : (
            <>
              {booksGoingToRead.length > 0 && (
                <GoingToReadList
                  library={booksGoingToRead}
                  type={"booksGoingToRead"}
                />
              )}
              {AlreadyReadList.length === 0 &&
              booksInReading.length === 0 ? null : (
                <NextButton setNext={setNext} />
              )}
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
