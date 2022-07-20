import DateTimePicker from "react-datetime-picker";
import React, { useState, useEffect } from "react";
import s from "./StatisticsResults.module.scss";

const StatisticsResults = () => {
  const [pagesRead, setPagesRead] = useState("");
  const [valueStart, setValueStart] = useState(new Date());
  const [newName, setnewName] = useState();

  useEffect(() => {
    setValueStart(new Date());
  }, [newName]);

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
    const newName = {
      date: `${valueStart.getDate()}.0${
        valueStart.getMonth() + 1
      }.${valueStart.getFullYear()} `,
      time: `${valueStart.getHours()}:${valueStart.getMinutes()}:${valueStart.getSeconds()} `,
      pagesRead,
    };

    // dispatch();
    console.log("newName :>> ", newName);
    setnewName(newName);
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
              type="tel"
              name="number"
              value={pagesRead}
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              autoComplete="off"
              onChange={onInput}
            />
          </label>
        </div>
        <button className={s.button} type="submit">
          Add result
        </button>
      </form>
      <h2 className={s.titleStatic}>STATISTICS</h2>
      <ul className={s.list}>
        <li className={s.item}>
          <p className={s.itemData}>10.10.2019</p>
          <p className={s.itemTime}>08:10:23</p>
          <p className={s.itemPages}>
            <span className={s.itemNumber}>32</span>pages
          </p>
        </li>
      </ul>
    </section>
  );
};

export default StatisticsResults;
