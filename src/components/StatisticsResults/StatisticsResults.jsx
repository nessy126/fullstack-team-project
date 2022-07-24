import DateTimePicker from "react-datetime-picker";
import React, { useState, useEffect } from "react";
import s from "./StatisticsResults.module.scss";
import {
  getAllBooks,
  getTraininId,
  getStatistics,
} from "redux/auth/authSelectors";
import { addStatistics, finishTraiining } from "redux/training/trainingOperations";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

const StatisticsResults = () => {
  const dispatch = useDispatch();
  const [pagesRead, setPagesRead] = useState("");
  const [valueStart, setValueStart] = useState(new Date());
  const [newStatistics, setNewStatistics] = useState();
  const allBooks = useSelector(getAllBooks);
  const traingId = useSelector(getTraininId);
  const allStatistics = useSelector(getStatistics);
  const restSttatistics = allStatistics.filter(
    (val, index, arr) => index > arr.length - 6
  );

  
  useEffect(() => {
    setValueStart(new Date());
  }, [newStatistics]);
  
  let correctBook = allBooks?.find(
    (book) => book?.pageTotal > book?.pageFinished
    );

    const dataToFinishTraining = {
      trainingID: traingId,
      factEndTraining: Number(new Date()),
      booksId: ["62cec8aec6e91af0ab950c3d"],
    }
    
//
    const letsFinishTraining = () => {
      dispatch(finishTraiining(dataToFinishTraining))
    }

  let correctPage = correctBook?.pageTotal - correctBook?.pageFinished;

  const onInput = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "number":
        setPagesRead(value);
        break;
      default:
        return;
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (correctBook === undefined) {
      alert("Ти прочитав всі книги ");
      letsFinishTraining()
      setPagesRead("");
      return;
    }
    if (pagesRead > correctPage) {
      alert("Забагато сторінок ");
      setPagesRead("");
      return;
    }

    const newStatistics = {
      date: valueStart,
      idBook: correctBook._id,
      trainingID: traingId,
      pagesRead,
      days: moment().quarter(3).format("DD.MM.YYYY"),
      time: moment().quarter(3).format("HH:mm:ss"),
    };
    dispatch(addStatistics(newStatistics));
    setNewStatistics(newStatistics);
    setPagesRead("");
  };

  return (
    <section className={s.section}>
      <h2 className={s.title}>RESULTS</h2>
      <form className={s.form} onSubmit={onSubmit}>
        <div className={s.flex}>
          <div>
            <p className={s.paragraph}>Date</p>
            <DateTimePicker
              onChange={setValueStart}
              value={valueStart}
              minDate={new Date()}
              clearIcon={null}
              className={s.datetime__picker}
              calendarClassName={s.react__calendar}
              disableClock={true}
              format="dd.MM.yyyy"
              placeholderText="Start"
            />
          </div>
          <label>
            <p className={s.paragraph}>Amount of pages</p>
            <input
              className={s.input}
              type="number"
              name="number"
              value={pagesRead}
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              autoComplete="off"
              onChange={onInput}
              min="1"
            />
          </label>
        </div>
        <button className={s.button} type="submit">
          Add result
        </button>
      </form>
        <button onClick={letsFinishTraining} className={s.button} type="button">
          Finish training
        </button>
      <h2 className={s.titleStatic}>STATISTICS</h2>
      <ul className={s.list}>
        {restSttatistics?.map(({ date, pagesRead, days, time }) => {
          return (
            <li className={s.item} key={date}>
              <p className={s.itemData}>{days}</p>
              <p className={s.itemTime}>{time}</p>
              <p className={s.itemPages}>
                <span className={s.itemNumber}>{pagesRead}</span>pages
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default StatisticsResults;
