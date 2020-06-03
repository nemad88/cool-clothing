import styled from "styled-components";

export const FooterWrapper = styled.div`
  min-height: 50rem;
  background: #ffa27a;
  padding: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const FooterTitleStyled = styled.h1`
  font-size: 5.6rem;
  font-weight: bold;
  letter-spacing: -1px;
  text-align: center;
`;

export const FooterSubtitleStyled = styled.h2`
  font-size: 2rem;
  color: white;
  margin-top: 3rem;
  letter-spacing: 2px;
  text-align: center;
`;

export const FooterFormStyled = styled.form`
  margin: 3rem;
  display: flex;
`;

export const InputStyled = styled.input`
  width: 300px;
  height: 40px;
  font-size: 2.4rem;
  border: none;
  padding: 1rem;
  -webkit-appearance: none;
`;

export const SubscribeButton = styled.button`
  background-color: #0fceac;
  border: none;

  img {
    height: 30px;
    width: 30px;
  }

  svg {
    height: 30px;
    width: 30px;

    &:hover path {
      fill: white;
    }
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0 2rem;
  flex-wrap: wrap;
`;

export const FooterColumn = styled.div`
  margin: 1rem;
  flex: 1 1 20rem;
  text-align: center;

  h3 {
    font-size: 1.6rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: black;
    font-size: 1.4rem;

    &:hover {
      color: white;
    }
  }
`;
