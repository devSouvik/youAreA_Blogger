import classes from "./FrontPageCard.module.css";
// import person from "../../assets/images/person.jpg"

const FrontPageCard = (props) => {
  return (
    <div className={classes.main}>
      <div className={classes.body}>
        <div className={classes["body__header"]}>
          <div className={classes.imagediv}>
            {/* <img src={person} alt="person" className={classes.image} /> */}
          </div>
          {props.author && props.author.name && (
            <h5 className={classes["header__title"]}>{props.author.name}</h5>
          )}
        </div>
        {props.title && (
          <h3 className={classes["body__main"]}>{props.title}</h3>
        )}
        {props.postText && (
          <div className={classes.postWrapper}>
            <div
              className={classes.bio}
              dangerouslySetInnerHTML={{ __html: props.postText }}
            />
          </div>
        )}
        {props.date && <p className={classes.subtitle}>{props.date} </p>}
      </div>
    </div>
  );
};

export default FrontPageCard;
