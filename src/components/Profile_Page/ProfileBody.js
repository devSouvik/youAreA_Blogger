// import { useEffect, useState } from "react";
import { useContext, useEffect, useState } from "react";
import classes from "./ProfileBody.module.css";
import ProfileHeader from "./ProfileHeader";
import ProfilePageCard from "./ProfilePageCard";
import { GlobalContext } from "../../contexts/GlobalContext";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";
import { useParams } from "react-router-dom";

const ProfileBody = () => {
  const { user } = useContext(GlobalContext);
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const { userId } = useParams();

  useEffect(() => {
    setLoading(true);
    const postsRef = collection(db, "posts");
    const q = query(postsRef, where("author.id", "==", userId));
    getDocs(q)
      .then((result) => {
        const docs = result.docs.map((v) => {
          return {
            id: v.id,
            ...v.data(),
          };
        });
        setPosts(docs);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [userId]);
  return (
    <div className={classes.main}>
      <ProfileHeader />
      <div className={classes.seperatordiv}>
        <p>Posts</p>
        <hr />
      </div>
      {loading && <p>Loading...</p>}
      {!loading && posts.length === 0 && <h3>No data found</h3>}
      {!loading &&
        posts.map((blog, index) => <ProfilePageCard key={index} {...blog} />)}
    </div>
  );
};

export default ProfileBody;
