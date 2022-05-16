import classes from "./ClubInfoDetailContents.module.css";

const ClubInfoDetailContents = ({ cp, vcp, loc }) => {
  return (
    <ul className={classes.list}>
      <li>회장: {cp}</li>
      <li>부회장: {vcp}</li>
      <li>위치: {loc}</li>
    </ul>
  );
};

export default ClubInfoDetailContents;
