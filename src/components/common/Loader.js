import image from "../../assets/infinityloader.svg";
import classes from "./Loader.module.css";

const Loader = ({ opacity, backgroundColor }) => {
  return (
    <div
      style={{ opacity: opacity, backgroundColor }}
      className={classes.Loader}
    >
      <img
        // className={classes.loader}
        src={image}
        height="30px"
        alt="Loading..."
      />
    </div>
  );
};

export default Loader;
