import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

import classes from "./DropDown.module.css";
import { auth, db } from "../../firebase";

const DropDown = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    async function getUserDetails() {
      const docRef = doc(db, "users", auth.currentUser.uid);
      const docSnapshot = await getDoc(docRef);
      setUser(docSnapshot.data());
    }

    getUserDetails();
  }, []);

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
        src={
          user && user.profile_picture
            ? user.profile_picture
            : "https://img.icons8.com/small/32/000000/user-male-circle.png"
        }
        alt=""
        className={classes.icon}
        onClick={toggleDropDown}
      />
      {isVisible && (
        <div className={dropdownclasses}>
          <h3>
            {user && user.name}
            <p>
              <span>{user && user.email}</span>
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
