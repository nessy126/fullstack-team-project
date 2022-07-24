const getAllBooks = (state) => state.books.books;

const getListGoingToRead = (state) => {
  const allBooks = getAllBooks(state) || [];
  const listGoingToRead = allBooks?.filter((book) => {
    return book.status === "goingToRead";
  });
  return listGoingToRead;
};
const getListInReading = (state) => {
  const allBooks = getAllBooks(state) || [];
  return allBooks?.filter((book) => book.status === "inReading");
};
const getListFinished = (state) => {
  const allBooks = getAllBooks(state) || [];
  return allBooks?.filter((book) => book.status === "finished");
};



const bookSelectors = {
  getAllBooks,
  getListGoingToRead,
  getListInReading,
  getListFinished,
};

export default bookSelectors;
