import styled from 'styled-components';
import { ReactComponent as SadSVG } from '../../assets/img/sad.svg';

const YourCartIsEmptyContianer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 8rem;
`;

const SadSmile = styled(SadSVG)`
  width: 80px;
  height: 80px;
  margin: 2rem;
`;

export const StyledComponents = {
  SadSmile,
  YourCartIsEmptyContianer,
};
