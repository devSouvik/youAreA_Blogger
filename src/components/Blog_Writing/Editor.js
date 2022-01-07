import React, { useRef } from "react";
import "./Editor.css";
import JoditEditor from "jodit-react";
// import { useRef } from "react";

export default function Editor({ postText }) {
  const editor = useRef(null);
  const config = {
    controls: {
      font: {
        list: {
          "Roboto Medium,Arial,sans-serif": "Roboto",
          "charter, Georgia, Cambria, Times new Roman ,Times, serif": "charter",
        },
      },
    },
  };

  return (
    <div>
      <JoditEditor
        ref={editor}
        config={config}
        tabIndex={1} // tabIndex of textarea
        onChange={(content) => {
          postText.current = content;
        }}
      />
    </div>
  );
}

// const useStyles = makeStyles({
//   helperText: {
//     fontWeight: "bold",
//     fontSize: 15,
//   },
//   labelText: {
//     color: "black",
//     fontWeight: "bold",
//   },
// });

// export default function Editor() {
//   const [heading, setHeading] = useState("");
//   const [articleData, setArticleData] = useState("");
//   const [showPost, setshowPost] = useState(false);

//   const finaldata = parse(articleData);

//   const handleChange = (event, editor) => {
//     let data = editor.getData();
//     setArticleData(data);
//   };

//   // use this function for submitting posts
//   // const postSubmit = () => {};

//   const classes = useStyles();

//   return (
//     <div className="container">
//       {/* <h1 className="articleHeading">Story Title</h1> */}

//       <h1 className="articleHeading">Write your story here . . .</h1>
//       <Box
//         sx={{
//           width: 500,
//           maxWidth: "100%",
//         }}
//       >
//         <TextField
//           fullWidth
//           label="Story Title"
//           id="storyTitle"
//           InputLabelProps={{
//             className: classes.labelText,
//           }}
//           FormHelperTextProps={{
//             className: classes.helperText,
//           }}
//           onChange={(e) => {
//             setHeading(e.target.value);
//             console.log(heading);
//           }}
//         />
//       </Box>
//       <div style={{ marginTop: 15 }}>
//         <CKEditor editor={ClassicEditor} onChange={handleChange} />
//       </div>
//       <hr />

//       <button className="btn" onClick={() => setshowPost(!showPost)}>
//         Toggle Article Preview
//       </button>

//       <div className="container px-5 py-5">{showPost && finaldata}</div>
//     </div>
//   );
// }
