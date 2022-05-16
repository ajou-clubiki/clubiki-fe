import classes from "./ClubInfoBtn.module.css";

const ClubInfoBtn = ({ btnName }) => {
  return <button className={classes.btn}>{btnName}</button>;
};

export default ClubInfoBtn;
