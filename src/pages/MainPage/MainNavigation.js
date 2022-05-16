import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <div className={styles.Navigation}>
      <div className={styles.Navigation__mainText}>
        <h4>동아리의 모든 것,</h4>
        <h1>CLUBIKI</h1>
      </div>
    </div>
  );
};

export default MainNavigation;
