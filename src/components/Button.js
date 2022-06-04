import classes from "./Button.module.css";

export const SmallBtnBlue = ({ btnName }) => {
  return (
    <button className={`${classes.SmallBtn} ${classes["SmallBtn--blue"]}`}>
      {btnName}
    </button>
  );
};

export const SmallBtnOrange = ({ btnName }) => {
  return (
    <button className={`${classes.SmallBtn} ${classes["SmallBtn--orange"]}`}>
      {btnName}
    </button>
  );
};

const Button = ({ btnName, disabled }) => {
  return (
    <button className={classes.btn} disabled={disabled}>
      {btnName}
    </button>
  );
};

export default Button;
