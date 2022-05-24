import ClubikiMainBoard from "./ClubikiMainBoard";
import ClubikiSubBoard from "./ClubikiSubBoard";
import CreateMainBoardBtn from "../CreateMainBoardPage/CreateMainBoardBtn";
import RemoveSubBoardBtn from "./RemoveSubBoardBtn";
import classes from "./ClubikiMainPage.module.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDataByFirebase } from "../../components/http-request";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { clubIdActions } from "../../store/clubId-slice";
import { subBoardActions } from "../../store/sub-board-slice";

const ClubikiMainPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const wikiBoardId = useSelector((state) => state.clubId.clubBoardId);
  const boardData = useSelector((state) => state.clubId.data);
  const [wikiBoardData, setWikiBoardData] = useState("");
  const [firstTime, setFirstTime] = useState(true);

  const id = location.state.clubId;

  useEffect(() => {
    const getSubBoardListDataFromServer = async () => {
      // if (wikiBoardId) {
      //   const response = await getDataBy2(`wikiBoard/page/${wikiBoardId}`);
      //   const responseData = await response.data;
      //   console.log(responseData);
      // }

      if (wikiBoardId && !firstTime) {
        const response = await getDataByFirebase(
          `wikiBoard/article/${wikiBoardId}`
        );

        const responseData = await response?.data?.body;
        setWikiBoardData(responseData);
      }

      setFirstTime(false);
    };

    getSubBoardListDataFromServer();

    dispatch(
      clubIdActions.changeAll({
        clubId: id,
        clubBoardId: wikiBoardId,
        data: wikiBoardData,
      })
    );

    dispatch(
      subBoardActions.addSubBoardData({
        idx: wikiBoardId,
        data: wikiBoardData,
      })
    );
  }, [wikiBoardId, wikiBoardData, id, dispatch]);

  return (
    <div style={{ margin: "10px" }}>
      <h1 style={{ marginTop: "10px" }}>동아리 위키</h1>
      <div style={{ display: "flex", gap: "30px" }}>
        <Link to="create-board" state={{ clubId: id }}>
          <CreateMainBoardBtn />
        </Link>
        <RemoveSubBoardBtn />
      </div>
      <div className={classes["page__layout"]}>
        <ClubikiMainBoard clubId={id} />
        <ClubikiSubBoard
          clubBoardId={wikiBoardId}
          clubId={id}
          markdown={boardData}
        />
      </div>
    </div>
  );
};

export default ClubikiMainPage;
