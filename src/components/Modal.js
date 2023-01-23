import ReactDOM from "react-dom";
import styled from "styled-components";

const ModalStyle = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: hidden;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  overscroll-behavior: contain;
`;

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <ModalStyle>{props.children}</ModalStyle>,
        portalElement
      )}
    </>
  );
};

export default Modal;
