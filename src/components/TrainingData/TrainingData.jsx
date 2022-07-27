import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Media from "react-media";
import { toast } from "react-toastify";
import MyGoals from "components/MyGoals";
import PlainingForm from "components/PlainingForm";
import Select from "components/Select";
import PlaningTabl from "components/PlainingTabl";
import Chart from "components/Chart";
import ButtonIcon from "components/ButtonIcon";
import { addTraining } from "redux/training/trainingOperations";
import bookSelectors from "redux/book/bookSelectors";
import { get, remove, updateStorage } from "utils/localStorage/localStorage";
import { STORAGE_KEY } from "assets/const";
import s from "./TrainingData.module.scss";

const TrainingData = () => {
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
  const [hideRightPart, setHideRightPart] = useState(false);

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
  const toglMobileTraining = (e) => {
    setHideRightPart(!hideRightPart);
  };
  const arrayPlanTraining = [
    {
      title: "Amount of books",
      amount: booksId.length || 0,
    },
    {
      title: "Amount of days",
      amount: amountOfDaysTraining || 0,
    },
  ];

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
    toast.success("Book was added to the list");
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
    <section className={s.page__wrapper}>
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
                {hideRightPart && (
                  <>
                    <ButtonIcon onClick={toglMobileTraining} type="arrow" />
                    <PlainingForm
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
                        <ButtonIcon
                          type="addActive"
                          onClick={handleAddSelected}
                        />
                      ) : (
                        <ButtonIcon
                          type="addDisabled"
                          onClick={handleAddSelected}
                        />
                      )}
                    </div>
                  </>
                )}
                {!hideRightPart && (
                  <>
                    <MyGoals data={arrayPlanTraining} />
                    <PlaningTabl
                      books={listPlainingBooks}
                      handleDelBook={handleDelBook}
                    />
                    {hideBtnStart && (
                      <ButtonIcon onClick={clickOnStartBtn} type="btnStart" />
                    )}
                    <Chart />
                    <ButtonIcon onClick={toglMobileTraining} type="plus" />
                  </>
                )}
              </>
            )}
            {matches.medium && (
              <>
                <div className={s.right__wrapper}>
                  <MyGoals data={arrayPlanTraining} />
                </div>
                <div className={s.left__wrapper}>
                  <PlainingForm
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
                      <ButtonIcon
                        type="addActive"
                        onClick={handleAddSelected}
                      />
                    ) : (
                      <ButtonIcon
                        type="addDisabled"
                        onClick={handleAddSelected}
                      />
                    )}
                  </div>
                  <PlaningTabl
                    books={listPlainingBooks}
                    handleDelBook={handleDelBook}
                  />
                  {hideBtnStart && (
                    <ButtonIcon onClick={clickOnStartBtn} type="btnStart" />
                  )}
                  <Chart />
                </div>
              </>
            )}
          </>
        )}
      </Media>
    </section>
  );
};

export default TrainingData;
