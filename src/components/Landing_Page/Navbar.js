import classes from "./Navbar.module.css";
import logo from "../../assets/images/logos/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.logoContainer}>
        <img className={classes.logo} src={logo} />
      </div>

      <div className={classes.rightContainer}>
        <a href="#" className={classes.navItem}>
          Write
        </a>
        <Link to="signin" className={classes.navItem}>
          Sign In
        </Link>
        <Link to="register" className={classes.startButton}>
          Get Started
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
