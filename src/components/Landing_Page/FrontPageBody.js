import { collection, getDocs } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { db } from "../../firebase";
import classes from "./FrontPageBody.module.css";
import FrontPageCard from "./FrontPageCard";

const blogs = [
  {
    author: "Anushree das",
    title: "In Software, When an Engineer exits the Team",
    date: "22 Oct",
    readTime: "5 min",
  },
  {
    author: "Anushree das",
    title: "In Software, When an Engineer exits the Team",
    date: "22 Oct",
    readTime: "5 min",
  },
  {
    author: "Anushree das",
    title: "In Software, When an Engineer exits the Team",
    date: "22 Oct",
    readTime: "5 min",
  },
  {
    author: "Anushree das",
    title: "In Software, When an Engineer exits the Team",
    date: "22 Oct",
    readTime: "5 min",
  },
  {
    author: "Anushree das",
    title: "In Software, When an Engineer exits the Team",
    date: "22 Oct",
    readTime: "5 min",
  },
];

const FrontPageBody = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    setLoading(true);
    const postsRef = collection(db, "posts");
    getDocs(postsRef)
      .then((result) => {
        const docs = result.docs.map((v) => {
          return v.data();
        });
        setPosts(docs);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <div className={classes.main}>
      {loading && <p>Loading...</p>}
      {!loading &&
        posts.map((blog, index) => <FrontPageCard key={index} {...blog} />)}
    </div>
  );
};

export default FrontPageBody;
