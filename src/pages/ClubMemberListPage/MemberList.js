import classes from "./ClubMemberListPage.module.css";
import { getDataBy1, postDataImg } from "../../components/http-request";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { SmallBtnBlue, SmallBtnOrange } from "../../components/Button";
import RoleTag from "../../components/RoleTag";
import "./MemberList.css";

const MemberList = ({ title }) => {
  const [membersList, setMembersList] = useState(null);
  const [acceptMemberId, setAcceptMemberId] = useState(null);
  const [denyMemberId, setDenyMemberId] = useState(null);
  const location = useLocation();
  const state = location.state;
  const clubId = state.id;

  useEffect(() => {
    const getMemberListFromServer = async () => {
      if (title === "신청 대기 목록") {
        const response = await getDataBy1(`${clubId}/joinList`);
        const responseData = await response.data.clubJoinInfos;
        setMembersList(responseData);
      }
      if (title === "정회원 목록") {
        const response = await getDataBy1(`${clubId}/memberList`);
        const responseData = await response.data.clubMemberInfos;
        setMembersList(responseData);
      }
    };

    getMemberListFromServer();
  }, [clubId, title]);

  const acceptToBecomeClubMemberHandler = async (studentId) => {
    const response = await postDataImg(`${clubId}/${studentId}/accept`);
    const responseMemberId = await response.data.memberId;
    const targetIdx = membersList.findIndex(
      (el) => el.studentId === responseMemberId
    );
    const target = {
      ...membersList.find((el) => el.studentId === responseMemberId),
    };
    const changeTargetToAccept = { ...target, status: "가입 수락" };

    const filterMembersList = membersList.filter((_, idx) => idx !== targetIdx);
    const putTargetInMembersList = [...filterMembersList, changeTargetToAccept];

    setMembersList(putTargetInMembersList);
    setAcceptMemberId(responseMemberId);
  };

  const refuseToBecomeClubMemberHandler = async (studentId) => {
    const response = await postDataImg(`${clubId}/${studentId}/reject`);
    const responseMemberId = await response.data.memberId;
    const targetIdx = membersList.findIndex(
      (el) => el.studentId === responseMemberId
    );
    const target = {
      ...membersList.find((el) => el.studentId === responseMemberId),
    };
    const changeTargetToDeny = { ...target, status: "가입 거절" };

    const filterMembersList = membersList.filter((_, idx) => idx !== targetIdx);
    const putTargetInMembersList = [...filterMembersList, changeTargetToDeny];

    setMembersList(putTargetInMembersList);
    setDenyMemberId(responseMemberId);
  };

  return (
    <>
      {!!membersList && (
        <div className={classes.memberList}>
          <h2>{title}</h2>
          <ul>
            {membersList.map((el, idx) => (
              <li key={idx} className={classes.memberItem}>
                <h5 className={classes.memberName}>{el.memberName}</h5>
                {el.role && (
                  <div style={{ marginRight: "10px" }}>
                    <RoleTag role={el.role} />
                  </div>
                )}
                {el.status === "대기" && (
                  <div className={classes.btnFlex}>
                    <div
                      onClick={() =>
                        acceptToBecomeClubMemberHandler(el.studentId)
                      }
                      style={{ margin: 0 }}
                    >
                      <SmallBtnBlue btnName="수락" />
                    </div>
                    <div
                      onClick={() =>
                        refuseToBecomeClubMemberHandler(el.studentId)
                      }
                      style={{ margin: 0 }}
                    >
                      <SmallBtnOrange btnName="거절" />
                    </div>
                  </div>
                )}
                {el.status !== "대기" && el?.status && (
                  <p style={{ fontSize: "15px", marginRight: "10px" }}>
                    {el.status}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default MemberList;
