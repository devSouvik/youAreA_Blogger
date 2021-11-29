import classes from "./LogInCard.module.css";
import image from "../../assets/images/bg3.jpg";
import { Link } from "react-router-dom";

const LogInCard = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div
      className={classes.container}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <form onSubmit={handleSubmit} className={classes.main}>
        <h2>Welcome...</h2>
        <div className={classes.inputDiv}>
          <label htmlFor="email" className={classes.label}>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
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
            className={classes.input}
          />
        </div>
        <div className={classes.forgetpassworddiv}>
          <Link className={classes.forgetpassword} to="/password/reset">
            forget password
          </Link>
        </div>
        <button className={classes.loginButton}>Log In</button>
        <h6>or</h6>
        <Link className={classes.createaccount} to="/register">
          Create account
        </Link>
      </form>
    </div>
  );
};

export default LogInCard;
