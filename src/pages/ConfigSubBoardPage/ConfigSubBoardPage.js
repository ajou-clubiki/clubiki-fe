import classes from "./ConfigSubBoardPage.module.css";
import ToastUIEditor from "../CreateSubBoardPage/ToastUIEditor";
import { useSelector } from "react-redux";

const ConfigSubBoardPage = () => {
  const markdown = useSelector((state) => state.clubId.data);
  const clubId = useSelector((state) => state.clubId.clubId);
  const id = useSelector((state) => state.clubId.clubBoardId);

  return (
    <div className={classes.ConfigSubBoardPage}>
      <h1>게시물 수정/삭제</h1>
      <ToastUIEditor initialValue={markdown} clubId={clubId} id={id} />
    </div>
  );
};

export default ConfigSubBoardPage;

// import classes from "./CreateSubBoardPage.module.css";
// import ToastUIEditor from "./ToastUIEditor";
// import { useLocation } from "react-router-dom";

// const CreateSubBoardPage = () => {
//   const location = useLocation();
//   const clubBoardId = location.state.clubBoardId;
//   const clubId = location.state.clubId;
//   const markdown = location.state.data;

//   return (
//     <div className={classes["sub-board__layout"]}>
//       <h1>게시물 생성하기</h1>
//       <ToastUIEditor id={clubBoardId} clubId={clubId} data={markdown} />
//     </div>
//   );
// };

// export default CreateSubBoardPage;
