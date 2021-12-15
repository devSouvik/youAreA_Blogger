import classes from "./DefaultNavbar.module.css";
import image from "../../assets/images/logos/logo.png";
import { useState } from "react";
import DropDown from "./DropDown";
import { Link } from "react-router-dom";

const DefaultNavbar = () => {
  const [searchInput, setSearchInput] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
  };
  const searchInputChangehandler = (event) => {
    setSearchInput(event.target.value);
  };
  let searchClasses = classes.search;

  if (searchInput.length > 0) searchClasses += " " + classes.active;

  return (
    <nav className={classes.DefaultNavbar}>
      <Link to="/" className={classes.imageAnchor}>
        <img src={image} alt="Blogger" className={classes.logo} />
      </Link>

      <div className={classes.rightContainer}>
        <button className={classes.startButton}>Write</button>
        <form className={classes.searchform} onSubmit={submitHandler}>
          <img
            src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png"
            className={classes.searchicon}
            alt="search-icon"
          />
          <input
            type="text"
            name="search"
            className={searchClasses}
            autoComplete="off"
            onChange={searchInputChangehandler}
          />
        </form>

        <DropDown />
      </div>
    </nav>
  );
};

export default DefaultNavbar;
