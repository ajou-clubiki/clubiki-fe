import classes from "./CreateMainBoardForm.module.css";
import CreateMainBoardBtn from "./CreateMainBoardBtn";
import { putDataByFirebase } from "../../components/http-request";
import { useState } from "react";
import { Link } from "react-router-dom";

const CreateMainBoardForm = ({ clubId }) => {
  const [dataForm, setDataForm] = useState({
    wikiName: "",
    wikiIntro: "",
    boardCategory: "",
    cpAnnouncement: "",
    isLock: false,
  });

  const submitDataFormHandler = (e) => {
    e.preventDefault();
  };

  const changeWikiNameHandler = (e) => {
    setDataForm({ ...dataForm, wikiName: e.target.value });
  };

  const changeWikiIntroHandler = (e) => {
    setDataForm({ ...dataForm, wikiIntro: e.target.value });
  };

  const changeCheckboxHandler = (e) => {
    setDataForm({ ...dataForm, isLock: e.target.checked });
  };

  const changeBoardCategoryHandler = (e) => {
    setDataForm({ ...dataForm, boardCategory: e.target.value });
  };

  const changeCPAnnounceHandler = (e) => {
    setDataForm({ ...dataForm, cpAnnouncement: e.target.value });
  };

  const sendFormDataToServer = () => {
    putDataByFirebase(`/wikiBoard/${clubId}`, dataForm);
  };

  return (
    <form className={classes["form__layout"]} onSubmit={submitDataFormHandler}>
      <div className={classes["form__small-layout"]}>
        <label htmlFor="board-title">게시판 제목:</label>
        <input
          id="board-title"
          type="text"
          value={dataForm.wikiName}
          onChange={changeWikiNameHandler}
        />
      </div>
      <div className={classes["form__small-layout"]}>
        <label htmlFor="board-intro">게시판 소개:</label>
        <textarea
          id="board-intro"
          type="text"
          value={dataForm.wikiIntro}
          onChange={changeWikiIntroHandler}
        />
      </div>
      <div className={classes["form__small-layout"]}>
        <label htmlFor="board-lock">게시판 잠금 여부:</label>
        <input
          id="board-lock"
          type="checkbox"
          style={{ width: "20px", height: "20px" }}
          onChange={changeCheckboxHandler}
        />
      </div>
      <div className={classes["form__small-layout"]}>
        <label htmlFor="boardCategory">카테고리:</label>
        <select
          id="boardCategory"
          data-testid="select-option"
          onChange={changeBoardCategoryHandler}
        >
          <option value="">---게시판 종류---</option>
          <option value="event">동아리행사</option>
          <option value="afterparty">뒷풀이</option>
          <option value="concert">공연</option>
          <option value="mt">MT</option>
          <option value="goods">물품</option>
          <option value="person">인물</option>
          <option value="etc">기타</option>
          <option value="meeting">모임</option>
        </select>
      </div>
      <div className={classes["form__small-layout"]}>
        <label htmlFor="cp-announce">회장의 말씀:</label>
        <input
          id="cp-announce"
          type="text"
          value={dataForm.cpAnnouncement}
          onChange={changeCPAnnounceHandler}
        />
      </div>
      <div style={{ marginTop: "30px" }} type="submit">
        <Link to="/wiki" onClick={sendFormDataToServer} state={{ clubId }}>
          <CreateMainBoardBtn />
        </Link>
      </div>
    </form>
  );
};

export default CreateMainBoardForm;
