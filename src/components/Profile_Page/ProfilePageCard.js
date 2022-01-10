import { memo, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./ProfilePageCard.module.css";
// import person from "../../assets/images/person.jpg";
// import { text } from "@fortawesome/fontawesome-svg-core";

const ProfilePageCard = (props) => {
  const navigate = useNavigate();
  let body = "";
  const readMoreTag = `<a id=${props.id} href="/blog-reading/${props.id}" className=${classes.readMore}>
      ...read more
    </a>`;

  if (props.postText.slice(0, 20).includes("<img")) {
    const imgIndex = props.postText.search("<im");
    if (imgIndex > 0) {
      const index = props.postText.slice(imgIndex).search(">");
      body =
        props.postText.slice(0, index + 130).trim() +
        `<span class = "${classes.readMore}">...read more</span>`;
    } else {
      const index = props.postText.search(">");
      body =
        props.postText.slice(0, index + 130).trim() +
        `<span class = "${classes.readMore}">...read more</span>`;
    }
    // body = props.postText.slice(0, index + 2);
  } else {
    body = props.postText.slice(0, 120).trim() + readMoreTag;
  }

  const handler = useCallback(
    (event) => {
      event.preventDefault();
      navigate("/blog-reading/" + props.id);
    },
    [navigate, props.id]
  );

  useEffect(() => {
    const el = document.getElementById(props.id);
    el.addEventListener("click", handler);
    return () => {
      el.removeEventListener("click", handler);
    };
  }, [props.id, handler]);
  return (
    <div className={classes.main}>
      <div className={classes.body}>
        <div className={classes["body__header"]}>
          <div className={classes.imagediv}>
            {props.author.profile_picture && (
              <img
                src={props.author.profile_picture}
                alt="person"
                className={classes.image}
              />
            )}
          </div>
          {props.author && props.author.name && (
            <h5 className={classes["header__title"]}>{props.author.name}</h5>
          )}
        </div>
        {props.title && (
          <h3 className={classes["body__main"]}>{props.title}</h3>
        )}
        {body && (
          <div className={classes.postWrapper}>
            <div
              className={classes.bio}
              dangerouslySetInnerHTML={{ __html: body }}
            />
          </div>
        )}
        {props.date && <p className={classes.subtitle}>{props.date} </p>}
      </div>
    </div>
  );
};

export default memo(ProfilePageCard);
