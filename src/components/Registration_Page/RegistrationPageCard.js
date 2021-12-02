import classes from "./RegistrationPageCard.module.css";
import image from "../../assets/images/bg3.jpg";
import { useRef, useState } from "react";
// import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase";

const RegistrationPageCard = () => {
  const auth = getAuth();

  const username = useRef();
  const name = useRef();
  const email = useRef();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  console.log(process.env.REACT_APP_FIREBASE_API_KEY);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!passwordIsValid || !passwordMatch) return;
    createUserWithEmailAndPassword(auth, email.current.value, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("Success", user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const passwordMatch =
    password.length > 0 && confirmPassword.length > 0
      ? password === confirmPassword
      : true;
  const passwordIsValid = password.length === 0 || password.length > 6;

  return (
    <div
      className={classes.container}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <form onSubmit={handleSubmit} className={classes.main}>
        <h3>Create Account...</h3>
        <div className={classes.inputDiv}>
          <label htmlFor="username" className={classes.label}>
            Username
          </label>
          <input
            type="username"
            name="username"
            id="username"
            ref={username}
            autoComplete="off"
            className={classes.input}
          />
        </div>
        <div className={classes.inputDiv}>
          <label htmlFor="name" className={classes.label}>
            Name
          </label>
          <input
            type="name"
            name="name"
            id="name"
            ref={name}
            autoComplete="off"
            className={classes.input}
          />
        </div>
        <div className={classes.inputDiv}>
          <label htmlFor="email" className={classes.label}>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            ref={email}
            autoComplete="off"
            className={classes.input}
          />
        </div>
        <div className={classes.inputDiv}>
          <label htmlFor="password" className={classes.label}>
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="off"
            onChange={handlePasswordChange}
            className={classes.input}
          />
          {!passwordIsValid && (
            <p className={classes.error}>
              Password should be atleast 6 characters
            </p>
          )}
        </div>
        <div className={classes.inputDiv}>
          <label htmlFor="confirm-password" className={classes.label}>
            Confirm Password
          </label>
          <input
            type="password"
            name="confirm-password"
            id="confirm-password"
            autoComplete="off"
            onChange={handleConfirmPasswordChange}
            className={classes.input}
          />
          {!passwordMatch && (
            <p className={classes.error}>Passwords do not match</p>
          )}
        </div>
        <button disabled={!passwordMatch} className={classes.loginButton}>
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationPageCard;
