import classes from "./CreateSubBoardPage.module.css";
import ToastUIEditor from "./ToastUIEditor";
import { useLocation } from "react-router-dom";

const CreateSubBoardPage = () => {
  const location = useLocation();
  const clubBoardId = location.state.clubBoardId;
  const clubId = location.state.clubId;
  const markdown = location.state.data;

  return (
    <div className={classes["sub-board__layout"]}>
      <h1>게시물 생성하기</h1>
      <ToastUIEditor id={clubBoardId} clubId={clubId} data={markdown} />
    </div>
  );
};

export default CreateSubBoardPage;
