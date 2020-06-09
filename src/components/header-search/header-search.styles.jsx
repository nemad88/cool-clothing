import styled from "styled-components";
import { ReactComponent as MagnifyIconSVG } from "../../assets/img/magnify.svg";
import { ReactComponent as CloseIconSVG } from "../../assets/img/close.svg";

export const HeaderSearch = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-area: search;

  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  @media screen and (max-width: 800px) {
    margin: 0 1rem;
  }
`;

export const SearchField = styled.input`
  width: 100%;
  padding: 1rem 1rem 1rem 4.5rem;
  background: #f5f5f5;
  border: none;
  font-size: 1.6rem;
  -webkit-appearance: none;

  &:focus {
    outline: none;
  }
`;

export const MagnifyIcon = styled(MagnifyIconSVG)`
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

export const CloseIcon = styled(CloseIconSVG)`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 15px;
  display: none;

  &.active {
    display: block;
  }
`;

export const StyledComponents = {
  HeaderSearch,
  SearchField,
  MagnifyIcon,
  CloseIcon,
};
