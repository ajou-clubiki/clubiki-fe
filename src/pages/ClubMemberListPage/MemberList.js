import classes from "./RegularMemberList.module.css";
import { getDataBy1 } from "../../components/http-request";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const MemberList = ({ title }) => {
  const [membersList, setMembersList] = useState(null);
  const location = useLocation();
  const state = location.state;
  const clubId = state.id;

  useEffect(() => {
    const getMemberListFromServer = async () => {
      const response = await getDataBy1(`${clubId}/joinList`);
      const responseData = await response.data.clubJoinInfos;
      const membersName = await responseData.map((el) => el.memberName);
      return membersName;
    };

    const getData = getMemberListFromServer();
    setMembersList(getData);
  }, []);

  return (
    <>
      {!!membersList && (
        <div className={classes.memberList}>
          <h2>{title}</h2>
          {/* <ul>
            {membersList.map((el) => (
              <li>{el}</li>
            ))}
          </ul> */}
        </div>
      )}
    </>
  );
};

export default MemberList;
