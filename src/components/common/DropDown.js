import classes from "./DropDown.module.css";

const DropDown = () => {
  return (
    <div className={classes.main}>
      <img
        src="https://img.icons8.com/small/32/000000/user-male-circle.png"
        alt=""
        className={classes.icon}
      />
      <div className={classes.dropdown}></div>
    </div>
  );
};

export default DropDown;
