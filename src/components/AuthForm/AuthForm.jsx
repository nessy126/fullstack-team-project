import { Formik, Form, Field, ErrorMessage } from "formik";

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
            <div>
              <p>Email *</p>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" />
              <p>Password *</p>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" />
            </div>
            <div className={s.buttons}>
              <button type="submit" disabled={isSubmitting}>
                Login
              </button>
              <button type="button" disabled={isSubmitting}>
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
