import classes from "./ProfileHeader.module.css";
import image from "../../assets/images/person.jpg";

const DummyData = {
  username: "me__a.n.u.s.h.r.e.e__",
  connection: "245",
  name: "~ANUSHREE DAS~",
  profession: "Blogger",
  bio: `Get The Art That You Have Dreamed.👩🏻‍🎨👩🏻‍🎨
  🖌️🎨.You are an artist, no matter how often you make art 
  or how much you make from it.`,
};

const ProfileHeader = () => {
  return (
    <div className={classes.main}>
      <img src={image} className={classes.image} alt="" />
      <div className={classes.info}>
        <h2 className={classes.username}>{DummyData.username}</h2>
        <div className={classes.connection}>
          <div className={classes.connectionitem}>
            <h3>{DummyData.connection}</h3>
            <p>connections</p>
          </div>
        </div>
        <h3 className={classes.name}>{DummyData.name}</h3>
        <p className={classes.profession}>{DummyData.profession}</p>
        <h4 className={classes.bio}>{DummyData.bio}</h4>
      </div>
    </div>
  );
};

export default ProfileHeader;
