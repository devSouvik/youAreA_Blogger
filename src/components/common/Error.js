// import image from "../../assets/Oops.png";
import classes from "./Error.module.css";
import animation from "../../assets/oop2.gif";

const Error = () => {
  return (
    <div>
      <img className={classes.oop} src={animation} alt="" />
    </div>
  );
};

export default Error;
