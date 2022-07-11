import AddBookForm from "../../components/AddBookForm/AddBookForm";
import AlreadyReadList from "../../components/AlreadyReadList/AlreadyReadList";
import GoingToReadList from "../../components/GoingToReadList/GoingToReadList";
import ReadingNowList from "../../components/ReadingNowList/ReadingNowList";

const LibraryPage = () => {
  return ( 
    <>
    <AddBookForm/>
    <AlreadyReadList/>
    <ReadingNowList/>
    <GoingToReadList/>
    </>
   );
}
 
export default LibraryPage;