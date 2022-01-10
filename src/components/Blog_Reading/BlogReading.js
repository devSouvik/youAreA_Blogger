import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";
import classes from "./BlogReading.module.css";

const BlogReading = () => {
  const { postId } = useParams();
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState();
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
    return <h2>error</h2>;
  }

  return (
    <div>
      <h3 className={classes.title}>{post.title}</h3>
      <div dangerouslySetInnerHTML={{ __html: post.postText }} />
    </div>
  );
};

export default BlogReading;
