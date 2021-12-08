import { useState } from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";

import classes from "./DropDown.module.css";
import { auth } from "../../firebase";

const DropDown = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleDropDown = () => {
    setIsVisible(!isVisible);
  };

  let dropdownclasses = `${classes.dropdown}`;

  const logoutHandler = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      alert("Something went wrong");
    }
  };

  return (
    <div className={classes.main}>
      <img
        src="https://img.icons8.com/small/32/000000/user-male-circle.png"
        alt=""
        className={classes.icon}
        onClick={toggleDropDown}
      />
      {isVisible && (
        <div className={dropdownclasses}>
          <h3>
            Anushree Das
            <p>
              <span>@anushreedas548</span>
            </p>
          </h3>
          <ul>
            <li>
              <Link to="/blog-write">
                {" "}
                <i className={`fa-solid ${classes.allicon} fa-pen-to-square`} />
                <span>Write a story</span>
              </Link>
            </li>
            <li>
              <Link to="/profile-page">
                <i className={`fa-solid ${classes.allicon} fa-user`}></i>
                <span>My profile</span>
              </Link>
            </li>
            <li>
              <Link to="/settings">
                <i className={`fa-solid ${classes.allicon} fa-gear`}></i>
                <span>Settings</span>
              </Link>
            </li>
            <li>
              <i
                className={`fa-solid ${classes.allicon} fa-right-from-bracket`}
              ></i>
              <span onClick={logoutHandler} className={classes.logout}>
                Log Out
              </span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDown;
