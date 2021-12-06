import * as Yup from "yup";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import classes from "./LogInCard.module.css";
import image from "../../assets/images/bg3.jpg";
import { Link } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
// import { BeatLoader } from "react-spinners";
import loader from "../../assets/infinityloader.svg";

const initialValue = {
  email: "",
  password: "",
};
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
  // .min(6, "Password should be atleast 6 characters"),
});

const LogInCard = () => {
  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      console.log(userCredential);
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
            <h2>Welcome...</h2>
            <div className={classes.inputDiv}>
              <label htmlFor="email" className={classes.label}>
                Email
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
            <div className={classes.inputDiv}>
              <label htmlFor="password" className={classes.label}>
                Password
              </label>
              <Field
                type="password"
                name="password"
                id="password"
                className={classes.input}
              />
              <ErrorMessage
                component="p"
                name="password"
                className={classes.error}
              />
            </div>
            <div className={classes.forgetpassworddiv}>
              <Link className={classes.forgetpassword} to="/password/reset">
                forget password
              </Link>
            </div>
            {/* <BeatLoader size={10} color="black" loading /> */}
            {isSubmitting ? (
              <img src={loader} alt="" height="50" width="50" />
            ) : (
              <button className={classes.loginButton}>Sign In</button>
            )}
            <h6>or</h6>
            <Link className={classes.createaccount} to="/register">
              Create account
            </Link>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LogInCard;
