import { useState } from "react";
import classes from "./DropDown.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const DropDown = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleDropDown = () => {
    setIsVisible(!isVisible);
  };

  let dropdownclasses = `${classes.dropdown}`;

  // if(!isVisible){
  //   dropdownclasses = `${dropdownclasses} ${classes.hide}`
  // }

  console.log(dropdownclasses);
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
                <i class={`fa-solid ${classes.allicon} fa-user`}></i>
                <span>My profile</span>
              </Link>
            </li>
            <li>
              <Link to="/settings">
                <i class={`fa-solid ${classes.allicon} fa-gear`}></i>
                <span>Settings</span>
              </Link>
            </li>
            <li>
              <i
                class={`fa-solid ${classes.allicon} fa-right-from-bracket`}
              ></i>
              <a href="#">Log Out</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDown;
