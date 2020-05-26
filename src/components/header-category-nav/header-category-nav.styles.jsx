import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavListStyled = styled.ul`
  font-size: 1.6em;
  background: #f5f5f5;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  transition: transform 1s ease;
`;

export const NavListLinkStyled = styled(Link)`
  margin: 1rem 3rem;
  display: inline-block;
  text-decoration: none;
  color: black;

  &:hover {
    font-weight: bold;
  }
`;
