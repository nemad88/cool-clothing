import styled from "styled-components";
import { ReactComponent as Magniyfy } from "../../assets/img/magnify.svg";

export const HeaderSearchContainer = styled.div`
  flex: 2 2 40rem;
  position: relative;
`;

export const InputSyled = styled.input`
  width: 100%;
  padding: 1rem;
  background: #f5f5f5;
  border: none;
  font-size: 1.6rem;
`;

export const MagniyfyStyled = styled(Magniyfy)`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 35px;
  transform-origin: bottom;
  transition: transform 1s;

  &:hover {
    transform: translateY(-50%) scale(1.04);
  }
`;
