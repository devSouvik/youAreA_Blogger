import { IconButton } from "@mui/material";
import { deleteDoc, doc, getDoc } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../../firebase";
import classes from "./BlogReading.module.css";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import { GlobalContext } from "../../contexts/GlobalContext";
import Error from "../common/Error";

const BlogReading = () => {
  const { postId } = useParams();
  const { user } = useContext(GlobalContext);
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    async function getDetails() {
      setLoading(true);
      try {
        const docRef = doc(db, "posts", postId);
        const docSnapshot = await getDoc(docRef);
        setPost(docSnapshot.data());
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getDetails();
  }, [postId]);

  if (loading) {
    return <h4>Loading...</h4>;
  }
  if (!post) {
    return <Error />;
  }

  const deletePost = async () => {
    const postDoc = doc(db, "posts", postId);
    await deleteDoc(postDoc);
    navigate(-1);
  };

  return (
    <div className={classes.main}>
      <div className={classes.titlediv}>
        <h3 className={classes.title}>{post.title}</h3>
        <div className={classes.username}>
          <div className={classes.usernameleft}>
            <div className={classes.imagediv}>
              {post.author.profile_picture && (
                <img
                  src={post.author.profile_picture}
                  alt="person"
                  className={classes.image}
                />
              )}
            </div>
            {post.author && post.author.name && (
              <h5 className={classes["header__title"]}>{post.author.name}</h5>
            )}
            <h4 className={classes.time}>
              <i>{post.time}</i>
            </h4>
          </div>
          {post.author.id === user.id && (
            <IconButton aria-label="settings" onClick={deletePost}>
              <DeleteOutlineRoundedIcon />
            </IconButton>
          )}
        </div>
      </div>
      {/* <h3 className={classes.title}>{post.author.profile_picture}</h3> */}
      <div
        className={classes.body}
        dangerouslySetInnerHTML={{ __html: post.postText }}
      />
    </div>
  );
};

export default BlogReading;
