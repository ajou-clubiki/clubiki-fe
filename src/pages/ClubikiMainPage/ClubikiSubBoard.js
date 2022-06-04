import classes from "./ClubikiSubBoard.module.css";
import SubBoardBtn from "./SubBoardBtn";
import ReactMarkdown from "react-markdown";
import { useSelector } from "react-redux";
import { clubIdActions } from "../../store/clubId-slice";
import { useDispatch } from "react-redux";
import { AiFillUnlock, AiFillLock } from "react-icons/ai";
import { postDataBy2 } from "../../components/http-request";

const ClubikiSubBoard = ({ clubBoardId, clubId, markdown }) => {
  const markdownData = markdown ? markdown : "보여줄 게시물이 없어요... 🥲";
  const lockSelector = useSelector((state) => state.clubId.isLock);
  const dispatch = useDispatch();

  const setLockerHandler = async (bool) => {
    const response = await postDataBy2(`wikiBoard/lock/${clubBoardId}`, {
      isLock: bool,
    });
    const responseData = response.data;
    const responseLock = responseData.isLock;

    dispatch(
      clubIdActions.changeLock({
        isLock: responseLock,
      })
    );
  };

  return (
    <div className={classes["subBoard"]}>
      {!!clubBoardId && (
        <>
          <div style={{ marginLeft: "60px" }}>
            {!lockSelector && (
              <AiFillUnlock
                className={classes.locker}
                onClick={() => setLockerHandler(true)}
              />
            )}
            {!!lockSelector && (
              <AiFillLock
                className={classes.locker}
                onClick={() => setLockerHandler(false)}
              />
            )}
            <ReactMarkdown
              components={{
                img: ({ node, ...props }) => (
                  <img style={{ maxWidth: "80%" }} {...props} alt="" />
                ),
              }}
            >
              {markdownData}
            </ReactMarkdown>
          </div>
          <SubBoardBtn
            clubBoardId={clubBoardId}
            clubId={clubId}
            markdownData={markdown}
          />
        </>
      )}
    </div>
  );
};

export default ClubikiSubBoard;
