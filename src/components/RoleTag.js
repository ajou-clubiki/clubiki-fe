import classes from "./RoleTag.module.css";

const RoleTag = ({ role }) => {
  const convertRoleToEnglish = {
    회장: "cp",
    "일반 회원": "normal",
  };

  const roleEng = `RoleTag--${convertRoleToEnglish[role]}`;
  return <div className={`${classes.RoleTag} ${classes[roleEng]}`}>{role}</div>;
};

export default RoleTag;
