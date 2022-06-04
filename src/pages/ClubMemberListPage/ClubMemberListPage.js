import MemberQueueList from "./MemberQueueList";
import RegularMemberList from "./RegularMemberList";
import classes from "./ClubMemberListPage.module.css";

const ClubMemberListPage = () => {
  return (
    <div className={classes.clubMemberListPage}>
      <h1>동아리 회원 목록</h1>
      <div className={classes.clubMember}>
        <RegularMemberList />
        <MemberQueueList />
      </div>
    </div>
  );
};

export default ClubMemberListPage;
