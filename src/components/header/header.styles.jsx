import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 150px;
  @media screen and (max-width: 800px) {
    min-height: 100px;
  }
`;

export const StyledComponents = {
  Header,
};
