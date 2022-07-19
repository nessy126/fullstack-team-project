import DateTimePicker from "react-datetime-picker";
import React, { useState } from "react";
import s from "./StatisticsResults.module.scss";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

export const addPagesCountValidationSchema = Yup.object().shape({
  pagesCount: Yup.number()
    .required("Field required")
    .moreThan(0, "Nice try")
    .lessThan(5001, "Max 5000"),
});

const StatisticsResults = () => {
  const [valueStart, setValueStart] = useState(new Date());
  const [valueEnd, setValueEnd] = useState(null);

  return (
    <>
      <div>
        <h2>RESULTS</h2>
        <p>Date</p>
        <DateTimePicker
          onChange={setValueStart}
          value={valueStart}
          minDate={new Date()}
          //   calendarIcon={<img alt="button" src={polygonIconSvg} />}
          clearIcon={null}
          className={s.datetime__picker}
          calendarClassName={s.react__calendar}
          disableClock={true}
          format="dd.MM.yyyy"
          placeholderText="Start"
        />
        <Formik
          initialValues={{ pagesCount: "" }}
          validationSchema={addPagesCountValidationSchema}
          onSubmit={(values, { setSubmitting }) => {
            values.valueStart = valueStart;
            console.log("values :>> ", values);
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <p>Amount of pages</p>
              <input
                type="number"
                name="pagesCount"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.pagesCount}
              />
              <ErrorMessage className={null} name="name" component="div" />
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default StatisticsResults;
