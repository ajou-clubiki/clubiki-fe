import { Link } from "react-router-dom";
import Button from "../../components/Button";
import classes from "./SubBoardBtn.module.css";

const SubBoardBtn = ({ clubBoardId, clubId, markdownData }) => {
  return (
    <Link
      to="/wiki/create-subboard"
      state={{
        clubBoardId: clubBoardId,
        clubId: clubId,
        data: markdownData,
      }}
    >
      <div className={classes.SubBoardBtn}>
        <Button btnName={"게시물 업로드"} />
      </div>
    </Link>
  );
};

export default SubBoardBtn;
