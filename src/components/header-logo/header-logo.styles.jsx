import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/img/Logo.svg";

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 1 20rem;
`;

export const LogoSvg = styled(Logo)`
  width: 8rem;
`;
