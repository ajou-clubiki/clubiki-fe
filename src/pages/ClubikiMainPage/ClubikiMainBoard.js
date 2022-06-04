import { useState, useEffect } from "react";
import { getDataBy2 } from "../../components/http-request";
import classes from "./ClubikiMainBoard.module.css";
import MainBoardList from "./MainBoardList";

const ClubikiMainBoard = ({ clubBoardId, clubId, markdown }) => {
  const [clubList, setClubList] = useState(null);

  useEffect(() => {
    const getClubListFromServer = async () => {
      const response = await getDataBy2(`wikiBoard/${clubId}`);
      const responseData = await response.data.data;

      console.log(response);
      setClubList(responseData);
    };

    getClubListFromServer();
  }, [clubId]);

  return (
    <div className={classes.mainBoard}>
      <h3>게시판 목록</h3>
      {!clubList && <h4>로딩중입니다...</h4>}
      {clubList && <MainBoardList clubList={clubList} />}
    </div>
  );
};

export default ClubikiMainBoard;
