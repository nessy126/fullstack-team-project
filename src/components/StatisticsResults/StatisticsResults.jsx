import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import s from "./StatisticsResults.module.scss";
import {
  getAllBooks,
  getTraininId,
  getStatistics,
} from "redux/auth/authSelectors";
import { addStatistics } from "redux/training/trainingOperations";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import { MODAL_TYPES } from "assets/helpers/modal";

const StatisticsResults = ({ setModal }) => {
  const dispatch = useDispatch();
  const [pagesRead, setPagesRead] = useState("");
  const [valueStart, setValueStart] = useState(new Date());
  const [newStatistics, setNewStatistics] = useState();
  const allBooks = useSelector(getAllBooks);
  const IdTraining = useSelector(getTraininId);
  const allStatistics = useSelector(getStatistics);
  const restStatistics = allStatistics.filter(
    (val, index, arr) => index > arr.length - 6
  );

  useEffect(() => {
    setValueStart(new Date());
  }, [newStatistics]);

  let correctBook = allBooks?.find(
    (book) => book?.pageTotal > book?.pageFinished
  );

  useEffect(() => {
    if (correctBook === undefined && allBooks.length > 0) {
      setModal(MODAL_TYPES.IN_TIME);
      setPagesRead("");
      return;
    }
  }, [correctBook, allBooks, setModal]);

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

    const newStatistics = {
      pagesRead: Number(pagesRead),
      dateShow: moment().quarter(3).format("DD.MM.YYYY"),
      time: moment().quarter(3).format("HH:mm:ss"),
      dateNow: valueStart,
    };

    dispatch(addStatistics({ newStatistics, IdTraining }));
    setNewStatistics(newStatistics);
    setPagesRead("");
  };

  return (
    <>
      <section className={s.section}>
        <h2 className={s.title}>RESULTS</h2>
        <form className={s.form} onSubmit={onSubmit}>
          <div className={s.flex}>
            <div>
              <p className={s.paragraph}>Date</p>
              <p className={s.datetime__picker}>
                <span className={s.iconAntenna}>
                  {moment().quarter(3).format("DD.MM.YYYY")}
                </span>
              </p>
            </div>
            <label>
              <p className={s.paragraph}>Amount of pages</p>
              <input
                className={s.input}
                type="number"
                name="number"
                value={pagesRead}
                title="At least one page required"
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
        <h2 className={s.titleStatic}>STATISTICS</h2>
        <ul className={s.list}>
          {restStatistics?.map(({ dateShow, pagesRead, time }) => {
            return (
              <li className={s.item} key={uuidv4()}>
                <p className={s.itemData}>{dateShow}</p>
                <p className={s.itemTime}>{time}</p>
                <p className={s.itemPages}>
                  <span className={s.itemNumber}>{pagesRead}</span>pages
                </p>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

StatisticsResults.propTypes = {
  setModal: PropTypes.func,
};

export default StatisticsResults;
