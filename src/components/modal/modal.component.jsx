import React from "react";
import { useSelector } from "react-redux";

import { StyledComponents as S } from "./modal.styles";

import {
  selectIsModelVisible,
  selectModalMessage,
} from "../../redux/modal/modal.selector";

const Modal = ({ children }) => {
  const modalIsVisible = useSelector(selectIsModelVisible);
  const modalMessage = useSelector(selectModalMessage);

  return (
    <S.ModalContainer className={modalIsVisible ? "visible" : null}>
      {modalMessage}
    </S.ModalContainer>
  );
};

export default Modal;
