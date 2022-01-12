import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import DefaultNavbar from "../components/common/DefaultNavbar";
import ProfilePageCard from "../components/Profile_Page/ProfilePageCard";
import { db } from "../firebase";
import classes from "./SearchPage.module.css";

const SearchPage = () => {
  return (
    <div>
      <DefaultNavbar />
      <SearchPageBody />
    </div>
  );
};

export default SearchPage;

const SearchPageBody = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  useEffect(() => {
    if (!searchParams.get("q")) return;
    setLoading(true);
    async function getData() {
      const q = query(
        collection(db, "posts"),
        where(
          "keywords",
          "array-contains-any",
          searchParams
            .get("q")
            .split(" ")
            .map((value) => value.toUpperCase())
        )
      );
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((value) => value.data());
      setPosts(data);
      setLoading(false);
    }
    getData();
  }, [searchParams]);
  console.log(posts);
  return (
    <div className={classes.main}>
      {loading && <p>Loading...</p>}
      {!loading && posts.length === 0 && <h3>No data found</h3>}
      {!loading &&
        posts.map((blog, index) => <ProfilePageCard key={index} {...blog} />)}
    </div>
  );
};
