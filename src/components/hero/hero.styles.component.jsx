import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Hero = styled.div`
  min-height: 44rem;
  background: linear-gradient(70deg, #07a5888c, rgba(82, 82, 240, 0.144)),
    url('http://adamgerman.hu/works/images/coolclothing/hero.jpg') 50% 0;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 120px);
  padding: 1rem;
`;

export const HeroTitle = styled.h1`
  font-size: 5.6rem;
  font-weight: bold;
  letter-spacing: -1px;
  text-align: center;
  color: white;
  transition: all 1s ease-out;

  &:hover {
    letter-spacing: 2px;
  }
`;

export const HeroSubtitle = styled.h2`
  font-size: 3rem;
  color: black;
  letter-spacing: 6px;
  text-align: center;
  transition: all 1s ease-out;

  &:hover {
    letter-spacing: 1px;
  }
`;

export const HeroButton = styled(Link)`
  margin-top: 8rem;
  font-size: 3rem;
  padding: 0.4rem 4rem;
  border-style: none;
  background-color: #ffa27a;
  color: white;
  text-decoration: none;

  box-shadow: 7px 10px 23px 2px rgba(0, 0, 0, 0.4);
  transition: all 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 7px 10px 16px 2px rgba(0, 0, 0, 0.6);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 7px 10px 16px 2px rgba(0, 0, 0, 0.2);
  }
`;

export const StyledComponents = {
  Hero,
  HeroTitle,
  HeroSubtitle,
  HeroButton,
};
