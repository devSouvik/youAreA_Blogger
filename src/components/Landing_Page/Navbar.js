import classes from "./Navbar.module.css";
import logo from "../../assets/images/logos/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.logoContainer}>
        <img className={classes.logo} src={logo} alt="" />
      </div>

      <div className={classes.rightContainer}>
        <Link to="blog-write" className={classes.navItem}>
          Write
        </Link>
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
