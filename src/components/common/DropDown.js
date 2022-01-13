import { useContext, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import classes from "./DropDown.module.css";
import { auth } from "../../firebase";
import { GlobalContext } from "../../contexts/GlobalContext";

const domNode = document.getElementById("root");

const DropDown = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { user } = useContext(GlobalContext);

  const toggleDropDown = () => {
    setIsVisible(!isVisible);
  };

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
        src={
          user && user.profile_picture
            ? user.profile_picture
            : "https://img.icons8.com/small/32/000000/user-male-circle.png"
        }
        alt=""
        className={classes.icon}
        onClick={toggleDropDown}
      />
      <DropDownModal
        isVisible={isVisible}
        user={user}
        logoutHandler={logoutHandler}
      />
    </div>
  );
};

export default DropDown;

const DropDownModal = ({ isVisible, user, logoutHandler }) => {
  if (!isVisible) return null;
  return createPortal(
    <div className={classes.dropdown}>
      <h3>{user && user.name}</h3>
      <p>{user && user.email}</p>

      <ul>
        <li>
          <Link to="/blog-write">
            {" "}
            <i className={`fa-solid ${classes.allicon} fa-pen-to-square`} />
            <span>Write a story</span>
          </Link>
        </li>
        <li>
          <Link to={"/profile/" + user.id}>
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
    </div>,
    domNode
  );
};
