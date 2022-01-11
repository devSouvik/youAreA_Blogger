import * as Yup from "yup";
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
import classes from "./ForgetPassword.module.css";
import image from "../assets/images/bg3.jpg";
import { Link } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
// import { BeatLoader } from "react-spinners";
import loader from "../assets/infinityloader.svg";
import { useState } from "react";

const initialValue = {
  email: "",
};
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

const ForgetPassword = () => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
    try {
      await sendPasswordResetEmail(auth, values.email);
      setShow(true);
      setError(false);
    } catch (error) {
      setError(true);
      setShow(false);
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      // ..
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className={classes.container}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      {show && (
        <div className={classes.popup}>
          A mail has been sent to you with the instructions to reset the
          password
        </div>
      )}
      {error && <div className={classes.popup}>Something went wrong</div>}
      <Formik
        initialValues={initialValue}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={classes.main}>
            <h2>Forget Password</h2>
            <div className={classes.inputDiv}>
              <label htmlFor="email" className={classes.label}>
                Enter your Email:
              </label>
              <Field
                type="email"
                name="email"
                id="email"
                className={classes.input}
              />
              <ErrorMessage
                component="p"
                name="email"
                className={classes.error}
              />
            </div>

            {/* <BeatLoader size={10} color="black" loading /> */}
            {isSubmitting ? (
              <img src={loader} alt="" height="50" width="50" />
            ) : (
              <button className={classes.loginButton}>Send</button>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ForgetPassword;
