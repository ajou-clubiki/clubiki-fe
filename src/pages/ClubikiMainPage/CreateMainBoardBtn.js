import Button from "../../components/Button";
import classes from "./CreateMainBoardBtn.module.css";
import { Link } from "react-router-dom";

const CreateMainBoardBtn = () => {
  return (
    <Link to="create-board">
      <div className={classes.button__layout}>
        <Button btnName={"게시판 생성"} />
      </div>
    </Link>
  );
};

export default CreateMainBoardBtn;
