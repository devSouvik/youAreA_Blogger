import Editor from "../components/Blog_Writing/Editor";
import DefaultNavbar from "../components/common/DefaultNavbar";
import { useState, useRef, useContext } from "react";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { GlobalContext } from "../contexts/GlobalContext";

// mui imports
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
// import { createTheme } from "@mui/material/styles";

const useStyles = makeStyles({
  helperText: {
    fontWeight: "bold",
    fontSize: 15,
  },
  labelText: {
    color: "black",
    fontWeight: "bold",
  },
});

export default function Blog_writing() {
  // const [postText, setPostText] = useState("");
  const [title, setTitle] = useState("");
  let navigate = useNavigate();
  const postText = useRef("");

  const { user } = useContext(GlobalContext);

  const postsCollectionRef = collection(db, "posts");

  const createPost = async () => {
    const date = new Date();
    let stringDate = date.toDateString();

    await addDoc(postsCollectionRef, {
      title,
      postText: postText.current,
      time: stringDate,
      keywords: title.split(" ").map((value) => value.toUpperCase()),
      author: {
        name: user.username,
        id: user.id,
        profile_picture: user.profile_picture,
      },
    });
    navigate("/home");
  };

  const classes = useStyles();

  return (
    <div>
      <DefaultNavbar />
      <div className="container">
        <h1>Let's write something . . .</h1>
        <Box
          sx={{
            width: 500,
            maxWidth: "100%",
          }}
        >
          <TextField
            inputProps={{ style: { fontWeight: "bold" } }}
            fullWidth
            label="Post Title"
            id="storyTitle"
            InputLabelProps={{
              className: classes.labelText,
            }}
            FormHelperTextProps={{
              className: classes.helperText,
            }}
            onChange={(event) => {
              setTitle(event.target.value);
              console.log(title);
            }}
          />
        </Box>
        <div style={{ marginTop: 15 }}>
          <Editor postText={postText} />
        </div>
      </div>
      <Button
        variant="contained"
        style={{ float: "right", marginRight: "5%", marginTop: 20 }}
        onClick={createPost}
      >
        Submit Post
      </Button>
    </div>
  );
}
