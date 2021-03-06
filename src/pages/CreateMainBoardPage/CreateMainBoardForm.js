import classes from "./CreateMainBoardForm.module.css";
import CreateMainBoardBtn from "./CreateMainBoardBtn";
import { postDataBy2 } from "../../components/http-request";
import { useState } from "react";
import { Link } from "react-router-dom";

const CreateMainBoardForm = ({ clubId }) => {
  const [wikiNameTouched, setWikiNameTouched] = useState(false);
  const [wikiNameIsValid, setWikiNameIsValid] = useState(false);
  const [categoryTouched, setCategoryTouched] = useState(false);
  const [categoryIsValid, setCategoryIsValid] = useState(false);
  const [dataForm, setDataForm] = useState({
    wikiName: "",
    wikiIntro: "",
    boardCategory: "",
    cpAnnouncement: "",
    isLock: false,
  });

  const wikiNameValidationError = !wikiNameIsValid && wikiNameTouched;
  const categoryValidationError = !categoryIsValid && categoryTouched;
  const isDisabled = !wikiNameIsValid || !categoryIsValid;

  const submitDataFormHandler = (e) => {
    e.preventDefault();
  };

  const changeWikiNameHandler = (e) => {
    if (e.target.value.trim() !== "") setWikiNameIsValid(true);
    if (e.target.value.trim() === "") setWikiNameIsValid(false);
    setDataForm({ ...dataForm, wikiName: e.target.value });
  };

  const changeWikiIntroHandler = (e) => {
    setDataForm({ ...dataForm, wikiIntro: e.target.value });
  };

  const changeCheckboxHandler = (e) => {
    setDataForm({ ...dataForm, isLock: e.target.checked });
  };

  const changeBoardCategoryHandler = (e) => {
    if (e.target.value.trim() !== "") setCategoryIsValid(true);
    if (e.target.value.trim() === "") setCategoryIsValid(false);
    setDataForm({ ...dataForm, boardCategory: e.target.value });
  };

  const changeCPAnnounceHandler = (e) => {
    setDataForm({ ...dataForm, cpAnnouncement: e.target.value });
  };

  const sendFormDataToServer = async () => {
    const response = await postDataBy2(`wikiBoard/${clubId}`, dataForm);
    console.log(response);
  };

  const wikiNameBlurHandler = () => {
    setWikiNameTouched(true);

    if (dataForm.wikiName.trim() === "") {
      setWikiNameIsValid(false);
    }
  };

  const boardCategoryBlurHandler = () => {
    setCategoryTouched(true);

    if (dataForm.boardCategory.trim() === "") {
      setCategoryIsValid(false);
    }
  };

  return (
    <form className={classes["form__layout"]} onSubmit={submitDataFormHandler}>
      <div className={classes["form__small-layout"]}>
        <label htmlFor="board-title">????????? ??????:</label>
        <input
          id="board-title"
          type="text"
          value={dataForm.wikiName}
          onChange={changeWikiNameHandler}
          onBlur={wikiNameBlurHandler}
          className={
            classes[
              `${wikiNameValidationError ? "BoardTitleValidationError" : ""}`
            ]
          }
        />
      </div>
      {wikiNameValidationError && (
        <p className={classes.InvalidWikiNameMessage}>
          ????????? ????????? ????????? ?????????.
        </p>
      )}
      <div className={classes["form__small-layout"]}>
        <label htmlFor="board-intro">????????? ??????:</label>
        <textarea
          id="board-intro"
          type="text"
          value={dataForm.wikiIntro}
          onChange={changeWikiIntroHandler}
        />
      </div>
      <div className={classes["form__small-layout"]}>
        <label htmlFor="board-lock">????????? ?????? ??????:</label>
        <input
          id="board-lock"
          type="checkbox"
          style={{ width: "20px", height: "20px" }}
          onChange={changeCheckboxHandler}
        />
      </div>
      <div className={classes["form__small-layout"]}>
        <label htmlFor="boardCategory">????????????:</label>
        <select
          id="boardCategory"
          data-testid="select-option"
          onChange={changeBoardCategoryHandler}
          onBlur={boardCategoryBlurHandler}
          className={`${
            categoryValidationError ? "CategoryValidationError" : ""
          }`}
        >
          <option value="">---????????? ??????---</option>
          <option value="event">???????????????</option>
          <option value="afterparty">?????????</option>
          <option value="concert">??????</option>
          <option value="mt">MT</option>
          <option value="goods">??????</option>
          <option value="person">??????</option>
          <option value="etc">??????</option>
          <option value="meeting">??????</option>
        </select>
      </div>
      {categoryValidationError && (
        <p className={classes.InvalidCategory}>??????????????? ???????????????</p>
      )}
      <div className={classes["form__small-layout"]}>
        <label htmlFor="cp-announce">????????? ??????:</label>
        <input
          id="cp-announce"
          type="text"
          value={dataForm.cpAnnouncement}
          onChange={changeCPAnnounceHandler}
        />
      </div>
      <div style={{ marginTop: "30px" }} type="submit">
        <Link to="/wiki" onClick={sendFormDataToServer} state={{ clubId }}>
          <CreateMainBoardBtn disabled={isDisabled} />
        </Link>
      </div>
    </form>
  );
};

export default CreateMainBoardForm;
