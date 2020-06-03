import styled from "styled-components";
import { ReactComponent as Magniyfy } from "../../assets/img/magnify.svg";

export const HeaderSearchContainer = styled.div`  
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content center;
  grid-area: search;
  @media screen and (max-width: 800px) { 
    margin: 0px 1rem;
  }
`;

export const InputSyled = styled.input`
  width: 100%;
  padding: 1rem 1rem 1rem 4.5rem;
  background: #f5f5f5;
  border: none;
  font-size: 1.6rem;
  -webkit-appearance: none;
`;

export const MagnifyStyled = styled(Magniyfy)`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 35px;
  transform-origin: bottom;
  transition: transform 1s;

  &:hover {
    transform: translateY(-50%) scale(1.04);
  }
`;

export const SearchResultBox = styled.div`
  position: absolute;
  top: 150%;
  width: 100%;
  height: 100%;
  background: red;
`;
