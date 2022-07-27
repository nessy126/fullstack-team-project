import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { SignUpSchema, LoginSchema } from "assets/schemas/authSchemas";
import { login, signUp } from "redux/auth/authOperations";
import RegLogButtons from "components/RegLogButtons";

import s from "./AuthForm.module.scss";

const AuthForm = ({ type }) => {
  const dispatch = useDispatch();

  const isRegister = type === "register";

  const initialValue = isRegister
    ? { name: "", email: "", password: "", confirmPassword: "" }
    : { email: "", password: "" };

  return (
    <div>
      <Formik
        initialValues={initialValue}
        validationSchema={isRegister ? SignUpSchema : LoginSchema}
        onSubmit={(values) => {
          try {
            const { name, email, password } = values;
            const data = isRegister
              ? { name, email, password }
              : { email, password };

            isRegister ? dispatch(signUp(data)) : dispatch(login(data));
          } catch (error) {
            console.log(error.message);
          }
        }}
      >
        {({ handleSubmit }) => (
          <div className={s.auth}>
            <div className={s.back}>
              <div className={s.form}>
                <Form onSubmit={handleSubmit}>
                  <div>
                    {isRegister && (
                      <div className={s.name}>
                        <p>
                          Name <b>*</b>
                        </p>
                        <Field
                          className={s.nameInput}
                          type="name"
                          name="name"
                          placeholder="name"
                          autoComplete="off"
                        />
                        <ErrorMessage
                          className={s.errorMessage}
                          name="name"
                          component="div"
                        />
                      </div>
                    )}
                    <div className={s.email}>
                      <p>
                        Email <b>*</b>
                      </p>
                      <Field
                        className={s.emailInput}
                        type="email"
                        name="email"
                        placeholder="example@email.com"
                        autoComplete="off"
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
                        placeholder=". . ."
                      />
                      <ErrorMessage
                        className={s.errorMessage}
                        name="password"
                        component="div"
                      />
                    </div>

                    {isRegister && (
                      <div className={s.password}>
                        <p>
                          Confirm password <b>*</b>
                        </p>
                        <Field
                          className={s.passwordInput}
                          type="password"
                          name="confirmPassword"
                          placeholder=". . ."
                        />
                        <ErrorMessage
                          className={s.errorMessage}
                          name="confirmPassword"
                          component="div"
                        />
                      </div>
                    )}
                  </div>
                  <RegLogButtons isRegister={isRegister} />
                </Form>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default AuthForm;

AuthForm.propTypes = {
  type: PropTypes.string.isRequired,
};
