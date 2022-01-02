// import { useEffect, useState } from "react";
import { useContext } from "react";
import classes from "./ProfileBody.module.css";
import ProfileHeader from "./ProfileHeader";
import ProfilePageCard from "./ProfilePageCard";
import { GlobalContext } from "../../contexts/GlobalContext";

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
  const value = useContext(GlobalContext);
  console.log(value);
  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   console.log("useEffect initiated");
  //   setLoading(true);
  //   console.log("Fetching data");
  //   setTimeout(() => {
  //     console.log("Data fetched");
  //     setLoading(false);
  //   }, 2000);
  // }, []);
  return (
    <div className={classes.main}>
      <ProfileHeader />
      <div className={classes.seperatordiv}>
        <p> My Posts</p>
        <hr />
      </div>
      {/* {loading && <p>Loading...</p>} */}
      {/* {!loading && */}
      {blogs.map((blog, index) => (
        <ProfilePageCard key={index} {...blog} />
      ))}
    </div>
  );
};

export default ProfileBody;
