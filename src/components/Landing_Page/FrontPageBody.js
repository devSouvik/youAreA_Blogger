import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
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
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    setLoading(true);
    const postsRef = collection(db, "posts");

    const q = query(postsRef, limit(5));
    getDocs(q)
      .then((result) => {
        const docs = result.docs.map((v) => {
          return v.data();
        });
        console.log('docs',docs);
        setPosts(docs);
      })
      .catch((error) => {
        setError(error)
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h3 className={classes.trending}>
        <i className={`fas fa-book-reader ${classes.icon}`} />
        NEW ON BLOGGER...
      </h3>
      <div className={classes.main}>
        {loading && <p>Loading...</p>}
        {!loading && error && <h2>Oops something went wrong!</h2> }
        {!loading &&
          posts.map((blog, index) => <FrontPageCard key={index} {...blog} />)}
      </div>
    </div>
  );
};

export default FrontPageBody;
