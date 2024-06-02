import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const editorConfiguration = {
  toolbar: [
    "heading",
    "|",
    "bold",
    "italic",
    "link",
    "|",
    "alignment",
    "bulletedList",
    "numberedList",
    "|",
    "blockQuote",
    "insertTable",
  ],
};

interface CustomEditorInterface {
  getData: (value: string) => void;
  data?: string;
}

const CustomEditor = ({ getData, data }: CustomEditorInterface) => {
  return (
    <CKEditor
      editor={ClassicEditor}
      // config={editorConfiguration}
      data={data}
      onChange={(_, editor) => {
        const data = editor?.getData();
        getData(data);
      }}
    />
  );
};

export default CustomEditor;