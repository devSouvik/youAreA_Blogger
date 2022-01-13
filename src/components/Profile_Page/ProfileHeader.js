import classes from "./ProfileHeader.module.css";
import image from "../../assets/images/person.jpg";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useContext, useState } from "react";
import ImageUpload from "./ImageUpload";
import Loader from "../common/Loader";
import { createPortal } from "react-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../../firebase";

const ProfileHeader = () => {
  const [loading, setLoading] = useState(true);
  const { userId } = useParams();
  const { user } = useContext(GlobalContext);
  const [userData, setUserData] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [error, setError] = useState(null);
  const [isRequested, setIsRequested] = useState(false);

  useEffect(() => {
    if (user.id === userId) {
      setLoading(false);
      setUserData(user);
      return;
    }
    async function getDetails() {
      try {
        const docRef = doc(db, "users", userId);
        const docSnapshot = await getDoc(docRef);
        // const q = query(
        //   collection(db, "connection_requests"),
        //   where("sender", "==", user.id)
        // );
        // const connectionData = await getDocs(q);
        // if (!connectionData.empty) {
        //   setIsRequested(true);
        // }
        if (docSnapshot.exists()) {
          setUserData(docSnapshot.data());
        } else {
          setError("User not found");
        }
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }
    getDetails();
  }, [userId]);

  if (!userData && loading) return null;
  else if (error) {
    return <h2>Page Not Found!</h2>;
  }

  const profileImage =
    userData && userData.profile_picture && userData.profile_picture.length > 0
      ? userData.profile_picture
      : image;
  const showImagePicker = () => {
    if (user.id === userId) setModalVisible(true);
  };
  const hideImagePicker = () => {
    setModalVisible(false);
  };

  const cancelRequest = async () => {
    setLoading(true);
    const q = query(
      collection(db, "connection_requests"),
      where("sender", "==", user.id),
      where("receiver", "==", userId)
    );
    const connectionData = await getDocs(q);
    if (!connectionData.empty) {
      await deleteDoc(
        doc(db, "connection_requests", connectionData.docs[0].id)
      );
      setIsRequested(false);
    }
    // const docRef1 = doc(db, "users", userId);
    // const docRef2 = doc(db, "users", user.id);
    // let data1 = await getDoc(docRef1);
    // let data2 = await getDoc(docRef2);
    // data1 = data1.data();
    // data2 = data2.data();
    // if(data1.connections) {
    //   await updateDoc(docRef1, {
    //     connections: [...data1.connections,{userId:user.id,accepted:false}]
    //   });
    // } else {
    //   await updateDoc(docRef1, {
    //     connections: [{userId:user.id,accepted:false}]
    //   });
    // }
    // if(data2.connections) {
    //   await updateDoc(docRef2, {
    //     connections: [...data2.connections,{userId,accepted:false}]
    //   });
    // } else {
    //   await updateDoc(docRef2, {
    //     connections: [{userId,accepted:false}]
    //   });
    // }
    setLoading(false);
  };

  const sendRequest = async () => {
    setLoading(true);
    const docRef = collection(db, "connection_requests");
    await addDoc(docRef, {
      sender: user.id,
      receiver: userId,
    });
    setIsRequested(true);
    setLoading(false);
  };

  return (
    <div className={classes.main}>
      <div className={classes.imagediv}>
        <div className={classes.imagecontainer}>
          <img src={profileImage} className={classes.image} alt="" />
          {user.id === userId && (
            <div onClick={showImagePicker} className={classes.imageupload}>
              <i className={`fa-solid fa-camera ${classes.editicon}`}></i>
            </div>
          )}
        </div>
      </div>
      <div className={classes.info}>
        <h2 className={classes.username}>{userData.username}</h2>

        <h3 className={classes.name}>{userData.name}</h3>
        {userData && userData.profession && userData.profession.length > 0 && (
          <p className={classes.profession}>{userData.profession}</p>
        )}
        {userData && userData.bio && userData.bio.length > 0 && (
          <h4 className={classes.bio}>{userData.bio}</h4>
        )}
        {/* {userData.id !== userId && (
          <button
            onClick={isRequested ? cancelRequest : sendRequest}
            class={classes.connect}
          >
            {isRequested ? "Cancel" : "Connect"}
          </button>
        )} */}
      </div>
      {user.id === userId && (
        <ImageUpload
          setLoading={setLoading}
          open={modalVisible}
          handleClose={hideImagePicker}
        />
      )}
      {loading &&
        createPortal(
          <Loader opacity={0.5} backgroundColor="black" />,
          document.getElementById("root")
        )}
    </div>
  );
};

export default ProfileHeader;
