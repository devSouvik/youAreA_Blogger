import classes from "./DefaultNavbar.module.css";
import image from "../../assets/images/logos/logo.png";
import { useState, useContext } from "react";
import DropDown from "./DropDown";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalContext";
import {
  collection,
  endAt,
  getDocs,
  orderBy,
  query,
  startAt,
  where,
} from "firebase/firestore";
import { db } from "../../firebase";

const DefaultNavbar = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const submitHandler = async (event) => {
    event.preventDefault();
    return navigate("/search?q=" + searchInput);
  };
  const searchInputChangehandler = (event) => {
    setSearchInput(event.target.value);
  };
  const context = useContext(GlobalContext);

  let searchClasses = classes.search;

  if (searchInput.length > 0) searchClasses += " " + classes.active;

  return (
    <nav className={classes.DefaultNavbar}>
      <Link to="/" className={classes.imageAnchor}>
        <img src={image} alt="Blogger" className={classes.logo} />
      </Link>

      <div className={classes.rightContainer}>
        <Link to="/blog-write" className={classes.startButton}>
          Write
        </Link>
        <form className={classes.searchform} onSubmit={submitHandler}>
          <img
            src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png"
            className={classes.searchicon}
            alt="search-icon"
          />
          <input
            type="text"
            name="search"
            placeholder="Search"
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
