import classes from "./ClubInfoPageModal.module.css";
import ClubInfoThumbnail from "./ClubInfoThumbnail";
import ClubInfoDetailContents from "./ClubInfoDetailContents";
import Button from "../../components/Button";
import { FaRegTimesCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const ClubInfoPageModal = ({ closeModal, name, imgSrc, intro, id }) => {
  const [isMember, setIsMember] = useState(true);
  const [isClubPresident, setIsClubPresident] = useState(true);

  return (
    <div
      className={classes.background}
      data-testid="club-info-modal"
      onClick={closeModal}
      id="modalBackground"
    >
      <div className={classes.card}>
        <div id="closeBtn">
          <FaRegTimesCircle
            className={classes.closeBtn}
            size={45}
            onClick={closeModal}
          />
        </div>
        <h1>{name}</h1>
        <ClubInfoThumbnail img={imgSrc} />
        <ClubInfoDetailContents intro={intro} />
        <div className={classes.flexBtn} style={{ marginTop: "50px" }}>
          {isMember && isClubPresident && (
            <Link to="/members" state={{ id }}>
              <Button btnName={"동아리 회원관리"} />
            </Link>
          )}
          {!isMember && <Button btnName={"동아리 가입"} />}
          <Link to="/wiki" state={{ clubId: id }}>
            <Button btnName={"동아리 위키"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClubInfoPageModal;
