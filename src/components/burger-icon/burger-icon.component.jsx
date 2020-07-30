import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { StyledComponents as S } from './burger-icon.styles';

import { selectBurgerMenuIsOpen } from '../../redux/burger/burger.selector';
import { toggleBurger } from '../../redux/burger/burger.actions';

const BurgerIcon = () => {
  const burgerIsOpen = useSelector(selectBurgerMenuIsOpen);
  const dispatch = useDispatch();

  return (
    <S.BurgerIcon
      onClick={() => dispatch(toggleBurger())}
      className={burgerIsOpen ? 'open' : null}
    >
      <S.BurgerIconSpan1 className={burgerIsOpen ? 'toggle' : null} />
      <S.BurgerIconSpan2 className={burgerIsOpen ? 'toggle' : null} />
      <S.BurgerIconSpan3 className={burgerIsOpen ? 'toggle' : null} />
    </S.BurgerIcon>
  );
};

export default BurgerIcon;
