import "froala-editor/css/froala_style.min.css";

import "froala-editor/css/froala_editor.pkgd.min.css";

import FroalaEditor from "react-froala-wysiwyg";

interface CustomEditorInterface {
  getData: (value: string) => void;
  data?: string;
}

const options = {
  toolbarButtons: [
    "bold",
    "italic",
    "underline",
    "alignRight",
    "alignCenter",
    "alignLeft",
    "outdent",
    "indent",
    "undo",
    "redo",
    "clearFormatting",
    "selectAll",
  ],
  pluginsEnabled: ["align", "charCounter"],
  charCounterMax: 140,
};

const CustomEditor = ({ getData, data }: CustomEditorInterface) => {
  return (
    <FroalaEditor
      config={options}
      model={data}
      onModelChange={(e: any) => getData(e)}
    />
  );
};

export default CustomEditor;
