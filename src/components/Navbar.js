import classes from "./Navbar.module.css";
import logo from "../assets/images/logos/logo.png";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.logoContainer}>
          <img className={classes.logo} src={logo}/>
      </div>

      <div className={classes.rightContainer}>
          <a href="#" className={classes.navItem}>Write</a>
          <a href="#" className={classes.navItem}>Sign In</a>
          <a href="#" className={classes.startButton}>
            Get Started </a>
      </div>
    </nav>
  );
};

export default Navbar;
