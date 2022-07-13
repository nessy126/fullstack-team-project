import { Formik, Form, Field, ErrorMessage } from "formik";

import spriteSVG from "../../assets/images/sprite.svg";

import s from "./AuthForm.module.scss";

const AuthForm = () => {
  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className={s.form}>
            <div className={s.google}>
              <button>
                <svg className={s.iconGoogle}>
                  <use href={`${spriteSVG}#google`}></use>
                </svg>
                Google
              </button>
            </div>
            <div>
              <div className={s.email}>
                <p>
                  Email <b>*</b>
                </p>
                <Field
                  className={s.emailInput}
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                />
                <ErrorMessage
                  className={s.errorMessage}
                  name="email"
                  component="div"
                />
              </div>
              <div className={s.password}>
                <p>
                  Password <b>*</b>
                </p>
                <Field
                  className={s.passwordInput}
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <ErrorMessage name="password" component="div" />
              </div>
            </div>
            <div className={s.buttons}>
              <button className={s.login} type="submit" disabled={isSubmitting}>
                Login
              </button>
              <button
                className={s.register}
                type="button"
                disabled={isSubmitting}
              >
                Registration
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AuthForm;
