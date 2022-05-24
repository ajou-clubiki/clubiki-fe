import CreateMainBoardForm from "./CreateMainBoardForm";
import classes from "./CreateMainBoardPage.module.css";
import { useLocation } from "react-router-dom";

const CreateMainBoardPage = () => {
  const location = useLocation();
  const clubId = location.state.clubId;

  return (
    <div className={classes.mainBoard}>
      <h1>게시판 양식 작성</h1>
      <CreateMainBoardForm clubId={clubId} />
    </div>
  );
};

export default CreateMainBoardPage;
