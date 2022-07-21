import s from "./FormReview.module.scss";

import { ErrorMessage, Formik } from "formik";
import Notiflix from "notiflix";
// import { useDispatch } from "react-redux";
import Rating from "components/Rating/Rating";
import { validationReviewForm } from "utils/validation/validationReviewForm";

export default function FormReview({ closeModal }) {
  // const dispatch = useDispatch();
  return (
    <>
      <Formik
        initialValues={{
          rating: 0,
          review: "",
        }}
        validationSchema={validationReviewForm}
        onSubmit={(values, { resetForm }) => {
          // dispatch(addBook(values));
          console.log("values", values);
          resetForm();
          closeModal();
          Notiflix.Notify.success(" Your review is saved");
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit} className={s.form}>
            <div className={s.form__container}>
              <h2 className={s.modalTitle}>Choose rating of the book</h2>
              <Rating values={values} />
              <div className={s.hiddenMargin}></div>
              <label className={s.form__label}>
                <h2 className={s.Resume}>Resume</h2>
                <textarea
                  type="text"
                  name="review"
                  autoComplete="off"
                  value={values.review}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="..."
                  className={s.textArea}
                />
                <ErrorMessage
                  component="div"
                  name="review"
                  className={s.errorMessage}
                />
              </label>
            </div>
            <button
              type="button"
              className={s.form__btn__close}
              onClick={() => closeModal()}
            >
              <span className={s.btn__close__text}>Back</span>
            </button>
            <button type="submit" className={s.form__btn__submit}>
              <span className={s.btn__submit__text}>Save</span>
            </button>
          </form>
        )}
      </Formik>
    </>
  );
}
