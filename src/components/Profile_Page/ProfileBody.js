import classes from "./ProfileBody.module.css";
import ProfileHeader from "./ProfileHeader";
import ProfilePageCard from "./ProfilePageCard";

const blogs = [
  {
    author: "Anushree das",
    title: "In Software, When an Engineer exits the Team",
    bio: "lorem ipsum anushree das In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    date: "22 Oct",
    readTime: "5 min",
  },
  {
    author: "Anushree das",
    title: "In Software, When an Engineer exits the Team",
    bio: "lorem ipsum anushree das In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    date: "22 Oct",
    readTime: "5 min",
  },
  {
    author: "Anushree das",
    title: "In Software, When an Engineer exits the Team",
    bio: "lorem ipsum anushree das In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    date: "22 Oct",
    readTime: "5 min",
  },
  {
    author: "Anushree das",
    title: "In Software, When an Engineer exits the Team",
    bio: "lorem ipsum anushree das In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    date: "22 Oct",
    readTime: "5 min",
  },
  {
    author: "Anushree das",
    title: "In Software, When an Engineer exits the Team",
    bio: "lorem ipsum anushree das In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    date: "22 Oct",
    readTime: "5 min",
  },
];

const ProfileBody = () => {
  return (
    <div className={classes.main}>
      <ProfileHeader />
      <div className={classes.seperatordiv}>
        <p> My Posts</p>
        <hr />
      </div>
      {blogs.map((blog, index) => (
        <ProfilePageCard key={index} {...blog} />
      ))}
    </div>
  );
};

export default ProfileBody;
