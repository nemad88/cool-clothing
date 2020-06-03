import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavList = styled.ul`
  font-size: 1.6em;
  background: #f5f5f5;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 1s ease;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const NavListLink = styled(Link)`
  margin: 1rem 3rem;
  display: inline-block;
  text-decoration: none;
  color: black;

  &:hover {
    font-weight: bold;
  }
`;

export const StyledComponents = {
  NavList,
  NavListLink,
};
