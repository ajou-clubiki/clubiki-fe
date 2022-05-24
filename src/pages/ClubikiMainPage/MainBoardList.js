import classes from "./MainBoardList.module.css";
import { useDispatch } from "react-redux";
import { clubIdActions } from "../../store/clubId-slice";

const MainBoardList = ({ clubList }) => {
  const dispatch = useDispatch();

  const showMainBoardHandler = (idx) => {
    const wikiBoardId = clubList[idx].wikiBoardId;
    dispatch(clubIdActions.changeClubBoardId({ clubBoardId: wikiBoardId }));
  };

  return (
    <ul className={classes.listStyle}>
      {clubList.map((el, idx) => {
        return (
          <li key={idx} onClick={() => showMainBoardHandler(idx)}>
            {el.wikiName}
          </li>
        );
      })}
    </ul>
  );
};

export default MainBoardList;

// 자물쇠와 관련된 부분은 나중에 설정한다.

// import { AiFillUnlock, AiFillLock } from "react-icons/ai";

/* {!el.isLock && (
              <AiFillUnlock
                className={classes.locker}
                onClick={changeLockHandler}
              />
            )}
            {!!el.isLock && (
              <AiFillLock
                className={classes.locker}
                onClick={changeLockHandler}
              />
            )} */
