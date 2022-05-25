import classes from "./MainBoardList.module.css";
import { useDispatch } from "react-redux";
import { clubIdActions } from "../../store/clubId-slice";

const MainBoardList = ({ clubList }) => {
  const dispatch = useDispatch();
  const showMainBoardHandler = (idx) => {
    const wikiBoardId = clubList[idx].wikiBoardId;
    const isLock = clubList[idx].isLock;
    dispatch(clubIdActions.changeClubBoardId({ clubBoardId: wikiBoardId }));
    dispatch(clubIdActions.changeLock({ isLock }));
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
