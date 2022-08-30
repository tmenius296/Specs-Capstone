import React, { useState } from "react";
import "./App.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function App() {
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
      <CKEditor editor={ClassicEditor} data={addData} onChange={handleChange} />
    </div>
  );
}

export default App;
