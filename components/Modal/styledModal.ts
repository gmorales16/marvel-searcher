import styled from "styled-components";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

const ModalContent = styled.div`
  width: 500px;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;

  @media (max-width: 768px) {
    width: 85%;
    padding: 15px;
  }
`;

const ModalTitle = styled.h2`
  position: relative;
  bottom: 20px;
  font-size: 35px;
  color: #505050;
`;

const CloseButton = styled.button`
  position: relative;
  left: 95%;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const ModalCardContainer = styled.div`
  max-height: 400px;
  overflow-y: auto;
`;

export {
  ModalWrapper,
  ModalContent,
  ModalTitle,
  CloseButton,
  ModalCardContainer,
};
