import { Formik, Form, Field, ErrorMessage } from "formik";

import spriteSVG from "../../assets/images/sprite.svg";
import { SignUpSchema, LoginSchema } from "../../assets/schemas/authSchemas";

import s from "./AuthForm.module.scss";

const AuthForm = ({ type }) => {
  const isRegister = type === "register";
  const handleReset = (resetForm) => {
    resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={
          isRegister
            ? { name: "", email: "", password: "", confirmPassword: "" }
            : { email: "", password: "" }
        }
        validationSchema={isRegister ? SignUpSchema : LoginSchema}
        onSubmit={(values) => {
          console.log(values);
          try {
            const { name, email, password } = values;
            const data = isRegister
              ? { name, email, password }
              : { email, password };
            console.log(data);
          } catch (error) {
            console.log(error.message);
          }
        }}
      >
        {(formProps) => (
          <div className={s.auth}>
            {/* {console.log(isSubmitting)} */}
            <div className={isRegister ? s.formReg : s.form}>
              <div className={s.google}>
                <button>
                  <svg className={s.iconGoogle}>
                    <use href={`${spriteSVG}#google`}></use>
                  </svg>
                  Google
                </button>
              </div>
              <Form>
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
                      //   autoComplete="off"
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
                <div className={s.buttons}>
                  <button
                    className={s.login}
                    type="submit"
                    onClick={handleReset.bind(null, formProps.resetForm)}
                    // disabled={isSubmitting}
                  >
                    {isRegister ? "Register" : "Login"}
                  </button>
                  {isRegister ? (
                    <p className={s.alreadyReg}>
                      Already register
                      <span className={s.changePage}>login</span>
                    </p>
                  ) : (
                    <span className={s.changePage}>Registration</span>
                  )}
                </div>
              </Form>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default AuthForm;
