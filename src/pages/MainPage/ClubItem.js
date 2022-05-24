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
    if (
      event.target === modalBg ||
      event.target.localName === ("path" || "svg")
    ) {
      setModalOn(false);
    }
  };

  const sendMessageFromClient = async () => {};

  return (
    <>
      <li className={classes.item} onClick={openModalHandler}>
        <h4>{data.name}</h4>
        <img
          src={data.imageURL}
          alt="동아리 사진"
          style={{ height: "100px" }}
        />
      </li>
      <Portal>
        {modalOn && (
          <ClubInfoPageModal
            closeModal={closeModalHandler}
            name={data.name}
            imgSrc={data.imageURL}
            onClick={sendMessageFromClient}
            intro={data.introduction}
            id={data.clubId}
          />
        )}
      </Portal>
    </>
  );
};

export default ClubItem;
