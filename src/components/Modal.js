import ReactDOM from "react-dom";
import styled from "styled-components";

const BackgroundDim = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const ModalContainer = styled.div`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  display: flex;
  background-color: #fff;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  overflow: hidden;
`;

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return ReactDOM.createPortal(
    <BackgroundDim onClick={props.onClose}>
      <ModalContainer {...props}>{props.children}</ModalContainer>
    </BackgroundDim>,
    portalElement
  );
};

export default Modal;
