import s from "./FormReview.module.scss";

import { ErrorMessage, Formik } from "formik";
import Rating from "components/Rating/Rating";

import { toast } from "react-toastify";

import MediaQuery from "react-responsive";
import { useDispatch } from "react-redux";
import { addReview } from "redux/book/bookOperations";
import { validationReviewForm } from "utils/validation/validationReviewForm";

export default function FormReview({ closeModal, id, backRate, comment }) {
  const dispatch = useDispatch();
  return (
    <>
      <Formik
        initialValues={{
          rating: 0,
          comment: comment,
          id: id,
        }}
        validationSchema={validationReviewForm}
        onSubmit={(values, { resetForm }) => {
          dispatch(addReview(values));
          resetForm();
          closeModal();
          toast.success(" Your comment is saved");
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit} className={s.form}>
            <div className={s.form__container}>
              <h2 className={s.modalTitle}>Choose rating of the book</h2>
              <Rating values={values} backRate={backRate} />
              <ErrorMessage
                component="div"
                name="rating"
                className={s.errorMessage}
              />

              <label className={s.form__label}>
                <h2 className={s.resume}>Resume</h2>
                <ErrorMessage
                  component="div"
                  name="comment"
                  className={s.errorMessageUp}
                />
                <textarea
                  type="text"
                  name="comment"
                  autoComplete="off"
                  value={values.comment}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="..."
                  className={s.textArea}
                />
              </label>
            </div>

            <MediaQuery maxWidth={767}>
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
            </MediaQuery>
            <MediaQuery minWidth={768}>
              <div className={s.buttonDiv}>
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
              </div>
            </MediaQuery>
          </form>
        )}
      </Formik>
    </>
  );
}
