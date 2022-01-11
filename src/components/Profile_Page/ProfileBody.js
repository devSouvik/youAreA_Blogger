// import { useEffect, useState } from "react";
import { useContext, useEffect, useState } from "react";
import classes from "./ProfileBody.module.css";
import ProfileHeader from "./ProfileHeader";
import ProfilePageCard from "./ProfilePageCard";
import { GlobalContext } from "../../contexts/GlobalContext";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";

const blogs = [
  {
    author: "Anushree das",
    title: "In Software, When an Engineer exits the Team",
    bio: "lorem ipsum anushree das In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    date: "22 Oct",
    readTime: "5 min",
    profession: "Job",
  },
  {
    author: "Anushree das",
    title: "In Software, When an Engineer exits the Team",
    bio: "lorem ipsum anushree das In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    date: "22 Oct",
    readTime: "5 min",
    profession: "Job",
  },
  {
    author: "Anushree das",
    title: "In Software, When an Engineer exits the Team",
    bio: "lorem ipsum anushree das In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    date: "22 Oct",
    readTime: "5 min",
    profession: "Job",
  },
  {
    author: "Anushree das",
    title: "In Software, When an Engineer exits the Team",
    bio: "lorem ipsum anushree das In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    date: "22 Oct",
    readTime: "5 min",
    profession: "Job",
  },
  {
    author: "Anushree das",
    title: "In Software, When an Engineer exits the Team",
    bio: "lorem ipsum anushree das In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    date: "22 Oct",
    readTime: "5 min",
    profession: "Technology",
  },
];

const ProfileBody = () => {
  const { user } = useContext(GlobalContext);
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    setLoading(true);
    const postsRef = collection(db, "posts");
    const q = query(postsRef, where("author.id", "==", user.id));
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
  }, [user.id]);
  return (
    <div className={classes.main}>
      <ProfileHeader />
      <div className={classes.seperatordiv}>
        <p> My Posts</p>
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
