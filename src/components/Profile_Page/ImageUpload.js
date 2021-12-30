import classes from "./ImageUpload.module.css";
import Modal from "@mui/material/Modal";
import { useRef } from "react";

const ImageUpload = ({ open, handleClose }) => {
  const imageInputRef = useRef();
  const openImagePicker = () => {
    imageInputRef.current.click();
  };
  const imageSelectHandler = (event) => {
    console.log(event);
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
          <div className={`${classes.button} ${classes.removephoto}`}>
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
