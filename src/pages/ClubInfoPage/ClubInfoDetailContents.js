import classes from "./ClubInfoDetailContents.module.css";

const ClubInfoDetailContents = ({ intro }) => {
  return <p className={classes.intro}>{intro}</p>;
};

export default ClubInfoDetailContents;
