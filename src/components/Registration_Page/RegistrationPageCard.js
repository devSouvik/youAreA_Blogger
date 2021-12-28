import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import * as Yup from "yup";

import image from "../../assets/images/bg3.jpg";
// import { Link } from "react-router-dom";
import { auth, db } from "../../firebase";
import classes from "./RegistrationPageCard.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import loader from "../../assets/infinityloader.svg";
// import { BeatLoader } from "react-spinners";

const initialValue = {
  username: "",
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password should be atleast 6 characters"),
  confirmPassword: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("password")], "Passwords do not match"),
});

const RegistrationPageCard = () => {
  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      if (userCredential && userCredential.user.uid) {
        await setDoc(doc(db, "users", userCredential.user.uid), {
          username: values.username,
          name: values.name,
          email: values.email,
          profession: null,
          bio: null,
          profilepicture: null,
        });
      }
      // Signed in
      const user = userCredential.user;
      console.log("Success", user);
      // ...
    } catch (error) {
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
      <Formik
        initialValues={initialValue}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={classes.main}>
            <h3>Create Account...</h3>
            <div className={classes.inputDiv}>
              <label htmlFor="username" className={classes.label}>
                Username
              </label>
              <Field
                type="username"
                name="username"
                id="username"
                autoComplete="off"
                className={classes.input}
              />
              <ErrorMessage
                component="p"
                name="username"
                className={classes.error}
              />
            </div>
            <div className={classes.inputDiv}>
              <label htmlFor="name" className={classes.label}>
                Name
              </label>
              <Field
                type="name"
                name="name"
                id="name"
                autoComplete="off"
                className={classes.input}
              />
              <ErrorMessage
                component="p"
                name="name"
                className={classes.error}
              />
            </div>
            <div className={classes.inputDiv}>
              <label htmlFor="email" className={classes.label}>
                Email
              </label>
              <Field
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                className={classes.input}
              />
              <ErrorMessage
                component="p"
                name="email"
                className={classes.error}
              />
            </div>
            <div className={classes.inputDiv}>
              <label htmlFor="password" className={classes.label}>
                Password
              </label>
              <Field
                type="password"
                name="password"
                id="password"
                autoComplete="off"
                className={classes.input}
              />
              <ErrorMessage
                component="p"
                name="password"
                className={classes.error}
              />
            </div>
            <div className={classes.inputDiv}>
              <label htmlFor="confirmPassword" className={classes.label}>
                Confirm Password
              </label>
              <Field
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                autoComplete="off"
                className={classes.input}
              />
              <ErrorMessage
                component="p"
                name="confirmPassword"
                className={classes.error}
              />
            </div>
            {/* <BeatLoader size={10} color="black" loading /> */}
            {isSubmitting ? (
              <img src={loader} alt="" height="50" width="50" />
            ) : (
              <button className={classes.loginButton}>Register</button>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationPageCard;
