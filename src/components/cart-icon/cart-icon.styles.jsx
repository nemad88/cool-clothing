import styled from 'styled-components';

import { ReactComponent as CartIconSVG } from '../../assets/img/shopbag.svg';

export const CartIconContainer = styled.div`
  position: relative;

  & span {
    position: absolute;
    cursor: pointer;
    bottom: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(50%);
    text-align: center;
    font-weight: 700;
  }
`;

export const CartIcon = styled(CartIconSVG)`
  margin: 0 15px;
  width: 30px;
  min-width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const StyledComponents = {
  CartIcon,
  CartIconContainer,
};

/* &:hover {
    animation: ${pulsing} 0.5s ease alternate infinite;
  } */
