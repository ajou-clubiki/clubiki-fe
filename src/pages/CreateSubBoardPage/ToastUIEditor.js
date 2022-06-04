import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import "@toast-ui/editor/dist/toastui-editor.css";
import classes from "./ToastUIEditor.module.css";
import { Editor } from "@toast-ui/react-editor";
import { useRef } from "react";
import CreateSubBoardBtn from "./CreateSubBoardBtn";
import { postDataImg, putDataByFirebase } from "../../components/http-request";

const ToastUIEditor = ({ id, clubId, data, initialValue }) => {
  const editorRef = useRef();
  const isConfig = initialValue ? true : false;

  const selectDataDependsOnConfig = () => {
    const dataForm = editorRef.current.getInstance().getMarkdown();

    if (isConfig) return dataForm;
    if (!isConfig) return `${data ? data : ""}\n\n${dataForm}`;
  };

  const uploadSubBoardDataHandler = async () => {
    await putDataByFirebase(
      `wikiBoard/article/${id}`,
      selectDataDependsOnConfig()
    );
  };

  return (
    <>
      <Editor
        plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
        initialValue={initialValue || "게시물을 작성해주세요"}
        height="600px"
        width="1000px"
        ref={editorRef}
        hooks={{
          addImageBlobHook: async (blob, callback) => {
            const formData = new FormData();
            formData.append("file", blob);

            const responseData = await postDataImg("upload", formData);
            const imgUrl = await responseData.data.url;

            callback(imgUrl, "alt text");
          },
        }}
      />
      <div
        className={classes.CreateSubBoardBtn}
        onClick={uploadSubBoardDataHandler}
      >
        <CreateSubBoardBtn clubId={clubId} />
      </div>
    </>
  );
};

export default ToastUIEditor;
