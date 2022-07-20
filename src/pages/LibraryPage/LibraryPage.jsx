import { useEffect, useState } from "react";
import AddBookForm from "../../components/AddBookForm/AddBookForm";
import { LibraryModal } from "../../components/LibraryModal/LibraryModal";
import { Plus } from "../../components/MainNav/icons/Plus";
import Modal from "../../components/MainNav/Modal/Modal";
import MediaQuery from "react-responsive";
// import AlreadyReadList from "../../components/AlreadyReadList/AlreadyReadList";
import GoingToReadList from "../../components/GoingToReadList/GoingToReadList";
// import ReadingNowList from "../../components/ReadingNowList/ReadingNowList";
import s from "./libraryPage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getAllBooks } from "redux/book/bookOperations";

const LibraryPage = () => {
  const dispatch = useDispatch();
  const books = dispatch(getAllBooks());
  console.log("books :>> ", books);
  const [modal, setModal] = useState({
    open: false,
    content: null,
  });

  // useEffect(() => {
  //   dispatch(getAllBooks());
  // }, []);

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
      {/* <AddBookForm /> */}

      {/* <AddBookForm />
      <button className={s.phonePlusButton} onClick={() => openModal()}>
        <Plus />
      </button> */}
      {/* {/* <AlreadyReadList/> */}
      {/* <ReadingNowList/> */}

      {/* } */}

      <MediaQuery maxWidth={767}>
        <button className={s.phonePlusButton} onClick={() => openModal()}>
          <Plus />
        </button>
      </MediaQuery>
      <MediaQuery minWidth={768}>
        <AddBookForm closeModal={closeModal} />
      </MediaQuery>
      {books.length ? <GoingToReadList /> : <LibraryModal />}

      {modal.open && (
        <Modal closeModal={closeModal}>
          <AddBookForm closeModal={closeModal} />
        </Modal>
      )}
    </>
  );
};

export default LibraryPage;
