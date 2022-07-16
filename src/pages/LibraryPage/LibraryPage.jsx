import AddBookForm from "../../components/AddBookForm/AddBookForm";
import { LibraryModal } from "../../components/LibraryModal/LibraryModal";
// import AlreadyReadList from "../../components/AlreadyReadList/AlreadyReadList";
// import GoingToReadList from "../../components/GoingToReadList/GoingToReadList";
// import ReadingNowList from "../../components/ReadingNowList/ReadingNowList";

const LibraryPage = () => {
  return (
    <>
      <AddBookForm />
      <LibraryModal />
      {/* <AlreadyReadList/>
    <ReadingNowList/>
    <GoingToReadList/> */}
    </>
  );
};

export default LibraryPage;
