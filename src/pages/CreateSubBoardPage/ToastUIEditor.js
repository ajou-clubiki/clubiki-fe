import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import "@toast-ui/editor/dist/toastui-editor.css";
import classes from "./ToastUIEditor.module.css";
import { Editor } from "@toast-ui/react-editor";
import { useEffect, useRef } from "react";
import CreateSubBoardBtn from "./CreateSubBoardBtn";
import { putDataByFirebase } from "../../components/http-request";

// /wikiBoard/article/{clubBoardId}

const ToastUIEditor = ({ id, clubId, data }) => {
  const prevRef = useRef();
  const editorRef = useRef();

  useEffect(() => {
    prevRef.current = data;
  }, []);

  const uploadSubBoardDataHandler = async () => {
    const dataForm = editorRef.current.getInstance().getMarkdown();
    await putDataByFirebase(
      `wikiBoard/article/${id}`,
      `${data ? data : ""}\n\n${dataForm}`
    );
  };

  return (
    <>
      <Editor
        plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
        initialValue="여기에 게시물을 작성해 주세요!"
        height="600px"
        width="1000px"
        ref={editorRef}
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
