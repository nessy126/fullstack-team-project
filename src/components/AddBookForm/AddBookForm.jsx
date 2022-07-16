import { ErrorMessage, Formik } from "formik";
import Notiflix from "notiflix";
import { useDispatch } from "react-redux";
import { addBookValidationSchema } from "./validation/validationAddBook";
import s from "./addBookForm.module.scss";
import Modal from "../MainNav/Modal/Modal";

export default function AddBookForm({ onHandleClose }) {
  const dispatch = useDispatch();
  const screenWidth = window.screen.width;

  return (
    <>
      <Formik
        initialValues={{
          title: "",
          author: "",
          publishYear: "",
          pagesTotal: "",
        }}
        validationSchema={addBookValidationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("values", values);
          Notiflix.Notify.success("book add to list");
          resetForm();
          // onHandleClose();
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit} className={s.form}>
            <div className={s.form__container}>
              <label className={s.form__label}>
                <p>Title</p>
                <input
                  type="text"
                  name="title"
                  autoComplete="off"
                  value={values.title}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Title"
                  className={s.title}
                />
                <ErrorMessage
                  component="div"
                  name="title"
                  className={s.errorMessage}
                />
              </label>
              <label className={s.form__label}>
                <p>Author</p>
                <input
                  type="text"
                  name="author"
                  autoComplete="off"
                  value={values.author}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Author"
                  className={s.author}
                />
                <ErrorMessage
                  component="div"
                  name="author"
                  className={s.errorMessage}
                />
              </label>
              <label className={s.form__label}>
                <p>Publication date</p>
                <input
                  type="number"
                  name="publishYear"
                  autoComplete="off"
                  value={values.publishYear}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="2022"
                  className={s.yearPages}
                />
                <ErrorMessage
                  component="div"
                  name="publishYear"
                  className={s.errorMessage}
                />
              </label>
              <label className={s.form__label}>
                <p>Amount of pages</p>
                <input
                  type="number"
                  name="pagesTotal"
                  autoComplete="off"
                  value={values.pagesTotal}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="500"
                  className={s.yearPages}
                />
                <ErrorMessage
                  component="div"
                  name="pagesTotal"
                  className={s.errorMessage}
                />
              </label>
            </div>

            <button type="submit" className={s.form__btn}>
              Add
            </button>
          </form>
        )}
      </Formik>
    </>
  );
}
