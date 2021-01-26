import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import "./formeditor.css";

class Editor1 extends React.Component {
  //   handleEditorChange = (e) => {
  //     console.log("Content was updated:", e.target.getContent());
  //   };

  render() {
    return (
      <Editor
        className="height"
        initialValue="<p></p>"
        apiKey="rercwr3k6dhefxdakg2kztf5y9173j7t70byqhoki3iggshs"
        outputFormat="text"
        init={{
          menubar: false,
          plugins: [
            "advlist autolink lists link image",
            "charmap print preview anchor help",
            "searchreplace visualblocks code",
            "insertdatetime media table paste wordcount",
          ],
          toolbar:
            "undo redo | bold italic | bullist numlist outdent indent | help",
        }}
        onChange={this.props.handleEditorChange}
      />
    );
  }
}

export default Editor1;
