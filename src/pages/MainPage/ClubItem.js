import classes from "./ClubItem.module.css";
import Portal from "../../components/Portal";
import ClubInfoPageModal from "../ClubInfoPage/ClubInfoPageModal";
import { useState } from "react";

const ClubItem = ({ data }) => {
  const [modalOn, setModalOn] = useState(false);

  const openModalHandler = () => {
    setModalOn(true);
  };

  const closeModalHandler = (event) => {
    const modalBg = document.getElementById("modalBackground");
    if (event.target === modalBg) setModalOn(false);
  };

  return (
    <>
      <li className={classes.item} onClick={openModalHandler}>
        <h4>{data.name}</h4>
        <img
          src={data.imagePath}
          alt="동아리 사진"
          style={{ height: "100px" }}
        />
      </li>
      <Portal>
        {modalOn && (
          <ClubInfoPageModal
            closeModal={closeModalHandler}
            name={data.name}
            imgSrc={data.imagePath}
            cp={data.cp}
            vcp={data.vcp}
            loc={data.loc}
          />
        )}
      </Portal>
    </>
  );
};

export default ClubItem;
