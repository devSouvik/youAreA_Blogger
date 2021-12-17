import React, { useState } from "react";
import "./Editor.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import parse from "html-react-parser";
// mui imports
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";

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

export default function Editor() {
  const [heading, setHeading] = useState("");
  const [articleData, setArticleData] = useState("");
  const [showPost, setshowPost] = useState(false);

  const finaldata = parse(articleData);

  const handleChange = (event, editor) => {
    let data = editor.getData();
    setArticleData(data);
  };

  // use this function for submitting posts
  // const postSubmit = () => {};

  const classes = useStyles();

  return (
    <div className="container">
      {/* <h1 className="articleHeading">Story Title</h1> */}

      <h1 className="articleHeading">Write your story here . . .</h1>
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
        }}
      >
        <TextField
          fullWidth
          label="Story Title"
          id="storyTitle"
          InputLabelProps={{
            className: classes.labelText,
          }}
          FormHelperTextProps={{
            className: classes.helperText,
          }}
          onChange={(e) => {
            setHeading(e.target.value);
            console.log(heading);
          }}
        />
      </Box>
      <div style={{ marginTop: 15 }}>
        <CKEditor editor={ClassicEditor} onChange={handleChange} />
      </div>
      <hr />

      <button className="btn" onClick={() => setshowPost(!showPost)}>
        Toggle Article Preview
      </button>

      <div className="container px-5 py-5">{showPost && finaldata}</div>
    </div>
  );
}
