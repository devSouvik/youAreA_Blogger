import React, { useState } from "react";
import "./Editor.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import parse from "html-react-parser";

export default function Editor() {
  const [articleData, setArticleData] = useState("");

  const handleChange = (event, editor) => {
    const data = editor.getData();
    setArticleData(data);
  };

  const postSubmit = () => {};

  return (
    <div className="container">
      <h1 className="articleHeading">Write your story here</h1>
      <div className="py-3">
        <CKEditor editor={ClassicEditor} onChange={handleChange} />
      </div>
      <button className="btn btn-dark d-flex ms-auto" onClick={postSubmit}>
        Post
      </button>
      <h1 className="articlePreview">Your Preview </h1>
      <hr />
      <div>{parse(articleData)}</div>
    </div>
  );
}
