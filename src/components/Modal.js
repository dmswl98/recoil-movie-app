import React from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <div className={classes.modal}>{props.children}</div>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Modal;
