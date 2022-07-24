import PlaningTabl from "components/PlainingTabl";
import PlanningForm from "components/PlanningForm";
import Select from "components/Select";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Media from "react-media";
import { toast } from "react-toastify";
import { addTraining } from "redux/training/trainingOperations";
import bookSelectors from "redux/book/bookSelectors";
import { get, remove, updateStorage } from "utils/localStorage/localStorage";
import { STORAGE_KEY } from "assets/const";
import s from "./TrainingData.module.scss";

const TrainingData = ({
  getAmountDaysTraining,
  getAmountBooksTraining,
  getDataStartTraining,
  getDataEndTraining,
  getBookListPlaining,
  showRight,
}) => {
  const dispatch = useDispatch();

  const listGoingToRead = useSelector(bookSelectors.getListGoingToRead);

  // Локальный стейт для получения и передачи данных из других компонентов
  const [selected, setSelected] = useState({});
  const [listPlainingBooks, setListPlainingBooks] = useState([]);
  const [showBtnAdd, setShowBtnAdd] = useState(false);
  const [booksId, setBooksId] = useState([]);
  const [startTraining, setStartTraining] = useState(0);
  const [endTraining, setEndTraining] = useState(0);
  const [valueTraining, setValueTraining] = useState({});
  const [amountOfDaysTraining, setAmountOfDaysTraining] = useState(0);
  const [resetInput, setResetInput] = useState(false);

  const addStartTraining = (e) => {
    setStartTraining(e);
  };
  const addEndTraining = (e) => {
    setEndTraining(e);
  };
  const addAmountOfDaysTraining = (e) => {
    setAmountOfDaysTraining(e);
  };
  const getFalseForReset = (e) => {
    setResetInput(false);
    updateStorage(STORAGE_KEY, "saveResetInput", false);
  };

  useEffect(() => {
    const saveData = get(STORAGE_KEY);
    if (saveData?.saveSelected) {
      setSelected(saveData.saveSelected);
    }
    if (saveData?.saveListPlainingBooks) {
      setListPlainingBooks(saveData.saveListPlainingBooks);
    }
    if (saveData?.saveShowBtnAdd) {
      setShowBtnAdd(saveData.saveShowBtnAdd);
    }
    if (saveData?.saveBooksId) {
      setBooksId(saveData.saveBooksId);
    }
    if (saveData?.saveStartTraining) {
      setStartTraining(saveData.saveStartTraining);
    }
    if (saveData?.saveEndTraining) {
      setEndTraining(saveData.saveEndTraining);
    }
    if (saveData?.saveValueTraining) {
      setValueTraining(saveData.saveValueTraining);
    }
    if (saveData?.saveAmountOfDaysTraining) {
      setAmountOfDaysTraining(saveData.saveAmountOfDaysTraining);
    }
    if (saveData?.saveResetInput) {
      setResetInput(saveData.saveResetInput);
    }
  }, [startTraining, endTraining]);

  useEffect(() => {
    if (amountOfDaysTraining > 0) {
      getAmountDaysTraining(amountOfDaysTraining);
      //   getDataStartTraining(startTraining);
      //   getDataEndTraining(endTraining);
    }
  }, [
    amountOfDaysTraining,
    // startTraining,
    // endTraining,
    // getDataStartTraining,
    // getDataEndTraining,
    getAmountDaysTraining,
  ]);

  useEffect(() => {
    if (booksId.length >= 0) {
      getAmountBooksTraining(booksId.length);
      //   getBookListPlaining(listPlainingBooks);
    }
  }, [booksId, listPlainingBooks, getAmountBooksTraining, getBookListPlaining]);

  useEffect(() => {
    if (startTraining > 0 && endTraining > 0 && booksId.length > 0) {
      const newValue = {
        booksId,
        startTraining: startTraining.getTime(),
        endTraining: endTraining.getTime(),
      };
      setValueTraining(newValue);
      updateStorage(STORAGE_KEY, "saveValueTraining", newValue);
    }
  }, [booksId, startTraining, endTraining]);

  // Функция для получения из компонента Селект объекта книги (при клике по li)
  const onGetSelectBook = (book) => {
    setSelected(book);
    setShowBtnAdd(true);
    updateStorage(STORAGE_KEY, "saveSelected", book);
    updateStorage(STORAGE_KEY, "saveShowBtnAdd", true);
  };

  // Функция для удаления книги из списка listPlainingBooks
  const handleDelBook = (e) => {
    const idDeletedBook = e.currentTarget.id;
    const updateList = listPlainingBooks.filter(
      (book) => book._id !== idDeletedBook
    );
    setListPlainingBooks(updateList);
    const updateBookId = booksId.filter((id) => id !== idDeletedBook);
    setBooksId(updateBookId);
    updateStorage(STORAGE_KEY, "saveListPlainingBooks", updateList);
    updateStorage(STORAGE_KEY, "saveBooksId", updateBookId);
  };
  // и возврата книги в список listGoingToRead

  // Функция для получения отфильтрованного списка книг для рендера в селекте (удаляются книги выдранные пользователем и отрендерреные в списке книг listPlainingBooks)
  const getVisibleBooks = (listGoingToRead) => {
    if (!listGoingToRead) {
      return [];
    }
    if (!listPlainingBooks) {
      return listGoingToRead;
    }
    return listGoingToRead.filter(
      (book) =>
        book._id !==
        listPlainingBooks?.find((elem) => elem._id === book._id)?._id
    );
  };
  // Результатом выполнения функции является список отфильтрованный с учетом списка listPlainingBooks
  const onFilteredlistGoingToRead = getVisibleBooks(listGoingToRead);

  // При нажатии на кнопку Add в список книг listPlainingBooks пушится книга выбранная в инпуте селекта, сетится в стейт id книги, обнуляется стейт выбранной книги, кнопка Add становится не активной; фильтрация listGoingToRead перед передачей в селект
  const handleAddSelected = () => {
    const updateList = [...listPlainingBooks, selected];
    setListPlainingBooks(updateList);
    const { _id } = selected;
    const newBookId = [...booksId, _id?.toString()];
    setBooksId(newBookId);
    setSelected({});
    setShowBtnAdd(false);
    toast("Book was added to the list", {
      className: `${s.tost__background}`,
      bodyClassName: `${s.tost__body}`,
      progressClassName: `${s.progress__bar}`,
    });
    setResetInput(true);
    updateStorage(STORAGE_KEY, "saveListPlainingBooks", updateList);
    updateStorage(STORAGE_KEY, "saveBooksId", newBookId);
    updateStorage(STORAGE_KEY, "saveSelected", {});
    updateStorage(STORAGE_KEY, "saveShowBtnAdd", false);
    updateStorage(STORAGE_KEY, "saveResetInput", true);
  };

  // При клике по кнопке "Старт тренировки" сначала проверяется наличие обеих дат (начало и конец тренировки) и только после этого отправляется запрос на бек по созданию тренировки
  const clickOnStartBtn = () => {
    if (startTraining === 0 || endTraining === 0) {
      toast("Choose a start and end date for your workout", {
        className: `${s.tost__background}`,
        bodyClassName: `${s.tost__body}`,
        progressClassName: `${s.progress__bar}`,
      });
      return;
    }
    dispatch(addTraining(valueTraining));
    remove(STORAGE_KEY);
  };
  // Условие при котором рендерится кнопка Старт тренировки
  const hideBtnStart = listPlainingBooks?.length > 0 ? true : false;

  return (
    <>
      <Media
        queries={{
          small: "(max-width: 767px)",
          medium: "(min-width: 768px)",
        }}
      >
        {(matches) => (
          <>
            {matches.small && (
              <>
                {showRight ? (
                  <>
                    <PlanningForm
                      addStartTraining={addStartTraining}
                      addEndTraining={addEndTraining}
                      addAmountOfDaysTraining={addAmountOfDaysTraining}
                    />
                    <div className={s.select__wrapper}>
                      <Select
                        books={onFilteredlistGoingToRead}
                        resetInput={resetInput}
                        getFalseForReset={getFalseForReset}
                        selected={selected}
                        onGetSelectBook={onGetSelectBook}
                      />
                      {showBtnAdd ? (
                        <button
                          type="button"
                          onClick={handleAddSelected}
                          className={s.select__button}
                        >
                          Add
                        </button>
                      ) : (
                        <button
                          type="button"
                          disabled
                          onClick={handleAddSelected}
                          className={s.select__button}
                        >
                          Add
                        </button>
                      )}
                    </div>{" "}
                  </>
                ) : (
                  <>
                    <PlaningTabl
                      books={listPlainingBooks}
                      handleDelBook={handleDelBook}
                    />
                    {!hideBtnStart ? null : (
                      <>
                        <div className={s.button__wrapper}>
                          <button
                            type="button"
                            onClick={clickOnStartBtn}
                            className={s.start__button}
                          >
                            Start training
                          </button>
                        </div>
                      </>
                    )}
                  </>
                )}
              </>
            )}
            {matches.medium && (
              <>
                <PlanningForm
                  addStartTraining={addStartTraining}
                  addEndTraining={addEndTraining}
                  addAmountOfDaysTraining={addAmountOfDaysTraining}
                />
                <div className={s.select__wrapper}>
                  <Select
                    books={onFilteredlistGoingToRead}
                    selected={selected}
                    onGetSelectBook={onGetSelectBook}
                    resetInput={resetInput}
                    getFalseForReset={getFalseForReset}
                  />
                  {showBtnAdd ? (
                    <button
                      type="button"
                      onClick={handleAddSelected}
                      className={s.select__button}
                    >
                      Add
                    </button>
                  ) : (
                    <button
                      type="button"
                      disabled
                      onClick={handleAddSelected}
                      className={s.select__button}
                    >
                      Add
                    </button>
                  )}
                </div>
                <PlaningTabl
                  books={listPlainingBooks}
                  handleDelBook={handleDelBook}
                />
                {!hideBtnStart ? null : (
                  <>
                    <div className={s.button__wrapper}>
                      <button
                        type="button"
                        onClick={clickOnStartBtn}
                        className={s.start__button}
                      >
                        Start training
                      </button>
                    </div>
                  </>
                )}
              </>
            )}
          </>
        )}
      </Media>
    </>
  );
};

export default TrainingData;
