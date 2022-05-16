import ReactDOM from "react-dom";

const Portal = ({ children }) => {
  const el = document.querySelector("#club-info-modal");
  return ReactDOM.createPortal(children, el);
};

export default Portal;
