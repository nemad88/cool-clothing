import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/img/Logo.svg";

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;  
  grid-area: logo;
  
  @media screen and (max-width: 800px) {    
    justify-content: flex-start;
    margin-left: 20px;
  }
`;

export const LogoSvg = styled(Logo)`
  width: 8rem;
`;
