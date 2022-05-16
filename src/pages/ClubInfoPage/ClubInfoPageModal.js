import classes from "./ClubInfoPageModal.module.css";
import ClubInfoThumbnail from "./ClubInfoThumbnail";
import ClubInfoDetailContents from "./ClubInfoDetailContents";
import ClubInfoBtn from "./ClubInfoBtn";
import { Link } from "react-router-dom";

const ClubInfoPageModal = ({ closeModal, name, imgSrc, cp, vcp, loc }) => {
  return (
    <div
      className={classes.background}
      data-testid="club-info-modal"
      onClick={closeModal}
      id="modalBackground"
    >
      <div className={classes.card}>
        <h1>{name}</h1>
        <ClubInfoThumbnail img={imgSrc} />
        <ClubInfoDetailContents cp={cp} vcp={vcp} loc={loc} />
        <div className={classes.flexBtn}>
          <Link to="">
            <ClubInfoBtn btnName={"동아리 가입"} />
          </Link>
          <Link to="/wiki">
            <ClubInfoBtn btnName={"동아리 위키"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClubInfoPageModal;
