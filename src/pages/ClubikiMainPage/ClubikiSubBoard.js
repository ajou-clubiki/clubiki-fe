import classes from "./ClubikiSubBoard.module.css";
import SubBoardBtn from "./SubBoardBtn";
import ReactMarkdown from "react-markdown";

const ClubikiSubBoard = ({ clubBoardId, clubId, markdown }) => {
  const markdownData = markdown ? markdown : "보여줄 게시물이 없어요... 🥲";

  return (
    <div className={classes["subBoard"]}>
      {!!clubBoardId && (
        <>
          <ReactMarkdown>{markdownData}</ReactMarkdown>
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
