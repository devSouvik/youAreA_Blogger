import classes from "./ProfileHeader.module.css";
import image from "../../assets/images/person.jpg";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useContext, useState } from "react";
import ImageUpload from "./ImageUpload";

const ProfileHeader = () => {
  const { user } = useContext(GlobalContext);
  const [modalVisible, setModalVisible] = useState(false);

  const profileImage =
    user.profile_picture && user.profile_picture.length > 0
      ? user.profile_picture
      : image;
  const showImagePicker = () => {
    setModalVisible(true);
  };
  const hideImagePicker = () => {
    setModalVisible(false);
  };
  return (
    <div className={classes.main}>
      <div className={classes.imagediv}>
        <div className={classes.imagecontainer}>
          <img src={profileImage} className={classes.image} alt="" />
          <div onClick={showImagePicker} className={classes.imageupload}>
            <i className={`fa-solid fa-camera ${classes.editicon}`}></i>
          </div>
        </div>
      </div>
      <div className={classes.info}>
        <h2 className={classes.username}>{user.username}</h2>

        <h3 className={classes.name}>{user.name}</h3>
        {user && user.profession && user.profession.length > 0 && (
          <p className={classes.profession}>{user.profession}</p>
        )}
        {user && user.profession && user.profession.length > 0 && (
          <h4 className={classes.bio}>{user.bio}</h4>
        )}
      </div>
      <ImageUpload open={modalVisible} handleClose={hideImagePicker} />
    </div>
  );
};

export default ProfileHeader;
