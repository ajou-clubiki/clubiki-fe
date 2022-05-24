import classes from "./Button.module.css";

const Button = ({ btnName }) => {
  return <button className={classes.btn}>{btnName}</button>;
};

export default Button;
