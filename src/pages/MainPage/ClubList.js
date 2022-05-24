import { useEffect, useState } from "react";
import { getDataBy1 } from "../../components/http-request";
import ClubItem from "./ClubItem";
import classes from "./ClubList.module.css";

const ClubList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [clubList, setClubList] = useState([]);

  useEffect(() => {
    const getClubListDataFromServer = async () => {
      const response = await getDataBy1("list");
      const responseData = await response.data;
      setClubList(responseData.clubInfos);
    };

    setIsLoading(true);
    getClubListDataFromServer();
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading && <h1>로딩중입니다...</h1>}
      {!isLoading && (
        <div className={classes["club-list"]}>
          <h1>동아리 목록</h1>
          {!!clubList &&
            clubList.map((element, idx) => (
              <ClubItem key={idx} data={element} />
            ))}
        </div>
      )}
    </>
  );
};

export default ClubList;
