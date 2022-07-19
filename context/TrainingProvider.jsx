import { createContext, useContext, useState } from "react";

const TrainingContext = createContext()
export const useTrainingContext = () => useContext(TrainingContext)

const TrainingProvider = ({children}) => {

  const [booksId, setBooksId] = useState([])
  const [booksList, setBooksList] = useState([])
  const [amountOfBooks, setAmountOfBooks] = useState(0)
  const [booksLeft, setBooksLeft] = useState(0)
  const [startTraining, setStartTraining] = useState(0)
  const [endTraining, setEndTraining] = useState(0)
  const [amountOfPages, setAmountOfPages] = useState(0)
  const [pagesPerDay, setPagesPerDay] = useState(0)
  const [statistics, setStatistics] = useState(0)

  

  return (
     <TrainingContext.Provider value={
      {booksId,
    booksList,
    amountOfBooks,
    booksLeft,
    startTraining,
    endTraining,
    amountOfPages,
    pagesPerDay,
    statistics,}
     }>
      {children}
     </TrainingContext.Provider>
  );
}
 
export default TrainingProvider;
 