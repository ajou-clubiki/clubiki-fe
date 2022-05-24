import Button from "../../components/Button";
import { Link } from "react-router-dom";

const CreateSubBoardBtn = ({ clubId }) => {
  return (
    <Link to="/wiki" state={{ clubId }}>
      <Button btnName={"게시물 업로드"} />
    </Link>
  );
};

export default CreateSubBoardBtn;
