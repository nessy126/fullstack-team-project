import { ErrorMessage, Formik } from "formik";
import Notiflix from "notiflix";
import { useDispatch } from "react-redux";
import { addBookValidationSchema } from "../../utils/validation/validationAddBook";
import s from "./AddBookForm.module.scss";
import { addBook } from "redux/book/bookOperations";

export default function AddBookForm({ closeModal }) {
  const dispatch = useDispatch();
  return (
    <>
      <Formik
        initialValues={{
          title: "",
          author: "",
          year: "",
          pageTotal: "",
        }}
        validationSchema={addBookValidationSchema}
        onSubmit={(values, { resetForm }) => {
          dispatch(addBook(values));
          resetForm();
          closeModal();
          Notiflix.Notify.success("book add to list");
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
                  name="year"
                  autoComplete="off"
                  value={values.year}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="2022"
                  className={s.yearPages}
                />
                <ErrorMessage
                  component="div"
                  name="year"
                  className={s.errorMessage}
                />
              </label>
              <label className={s.form__label}>
                <p>Amount of pages</p>
                <input
                  type="number"
                  name="pageTotal"
                  autoComplete="off"
                  value={values.pageTotal}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="500"
                  className={s.yearPages}
                />
                <ErrorMessage
                  component="div"
                  name="pageTotal"
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
