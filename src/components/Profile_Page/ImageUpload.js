import classes from "./ImageUpload.module.css";
import Modal from "@mui/material/Modal";
import { useContext, useRef } from "react";
import { db, storage } from "../../firebase";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import { GlobalContext } from "../../contexts/GlobalContext";
import { doc, updateDoc } from "firebase/firestore";

const ImageUpload = ({ open, handleClose, setLoading }) => {
  const imageInputRef = useRef();

  const { user, updateUser } = useContext(GlobalContext);

  const openImagePicker = () => {
    imageInputRef.current.click();
  };

  const imageSelectHandler = async (event) => {
    handleClose();

    if (event.target.files.length < 0) return;
    setLoading(true);
    const fileName = `${Date.now()}.${event.target.value.split(".").at(-1)}`;
    const storageRef = ref(storage, fileName);
    if (
      user.profile_picture_location &&
      user.profile_picture_location.length > 0
    ) {
      deleteObject(ref(storage, user.profile_picture_location));
    }
    await uploadBytes(storageRef, event.target.files[0]);
    const url = await getDownloadURL(storageRef);
    const docRef = doc(db, "users", user.id);
    await updateDoc(docRef, {
      profile_picture: url,
      profile_picture_location: fileName,
    });
    setLoading(false);

    updateUser({
      ...user,
      profile_picture: url,
      profile_picture_location: fileName,
    });
    console.log(url);
  };

  const deleteImage = async () => {
    handleClose();

    setLoading(true);
    if (
      user.profile_picture_location &&
      user.profile_picture_location.length > 0
    ) {
      deleteObject(ref(storage, user.profile_picture_location));
    }
    const docRef = doc(db, "users", user.id);
    await updateDoc(docRef, {
      profile_picture: "",
      profile_picture_location: "",
    });
    setLoading(false);

    updateUser({
      ...user,
      profile_picture: "",
      profile_picture_location: "",
    });
  };

  return (
    <Modal open={open}>
      <div className={classes.container}>
        <div className={classes.card}>
          {/* <span onClick={handleClose} className={classes.close}>
            <i class={`fa-solid fa-xmark ${classes.closeicon}`}></i>
          </span> */}
          <h3 className={classes.title}>Change profile photo</h3>
          <div
            className={`${classes.button} ${classes.uploadphoto}`}
            onClick={openImagePicker}
          >
            Upload photo
          </div>
          <div
            className={`${classes.button} ${classes.removephoto}`}
            onClick={deleteImage}
          >
            Remove current photo
          </div>
          <div
            className={`${classes.button} ${classes.cancel}`}
            onClick={handleClose}
          >
            Cancel
          </div>
          <input
            type="file"
            name="imageInput"
            id="imageInput"
            accept="image/*"
            className={classes.file}
            onChange={imageSelectHandler}
            ref={imageInputRef}
          />
        </div>
      </div>
    </Modal>
  );
};

export default ImageUpload;
