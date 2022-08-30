import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function textEditor() {
  const [addData, setVal] = useState("");
  const [addedData, showData] = useState(0);
  const handleChange = (e, editor) => {
    const data = editor.getData();
    setVal(data);
  };
  return (
    <div className="App">
      <h2>
        <u>ckeditor5 with React.js</u>
      </h2>
      <div
        style={{ width: "700px", display: "inline-block", textAlign: "left" }}
      >
        <div
          style={{ width: "700px", display: "inline-block", textAlign: "left" }}
        >
          <button
            style={{ backgroundColor: "black", color: "white" }}
            onclick={() => showData(!addedData)}
          >
            {addedData ? "Hide Data" : "Show Data"}
          </button>
        </div>
        <CKEditor
          editor={ClassicEditor}
          data={addData}
          onChange={handleChange}
        />
        <div>{addedData ? addData : ""}</div>
      </div>
    </div>
  );
}
