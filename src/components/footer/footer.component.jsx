import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as RightIcon } from '../../assets/img/icon-right.svg';

import {
  FooterWrapper,
  FooterTitleStyled,
  FooterSubtitleStyled,
  FooterFormStyled,
  InputStyled,
  SubscribeButton,
  FooterLinks,
  FooterColumn,
} from './footer.styles';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [invalidEmail, setInvalidEmail] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setInvalidEmail(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email.includes('@') || !email.includes('.')) {
      setInvalidEmail(true);
    }
  };

  return (
    <FooterWrapper>
      <FooterTitleStyled>subscribe to news</FooterTitleStyled>
      <FooterSubtitleStyled>
        Receive our newsletter on the latest deals and happenings. <br />
        You can unsubscirbe any time.
      </FooterSubtitleStyled>
      <FooterFormStyled onSubmit={handleSubmit}>
        <InputStyled
          onChange={(event) => handleEmailChange(event)}
          type="text"
          placeholder="your email address"
          invalid={invalidEmail}
        />
        <SubscribeButton type="submit">
          <RightIcon></RightIcon>
        </SubscribeButton>
      </FooterFormStyled>
      <FooterLinks>
        <FooterColumn>
          <h3>help</h3>
          <ul>
            <li>
              <Link to="/">Frequently Asked Questions</Link>
            </li>
            <li>
              <Link to="/">Help</Link>
            </li>
            <li>
              <Link to="/">How To Return</Link>
            </li>
            <li>
              <Link to="/">Contact Us</Link>
            </li>
          </ul>
        </FooterColumn>
        <FooterColumn>
          <h3>delivery options</h3>
          <ul>
            <li>
              <Link to="/">UK Next Day</Link>
            </li>
            <li>
              <Link to="/">UK Standard</Link>
            </li>
            <li>
              <Link to="/">EU Standard</Link>
            </li>
            <li>
              <Link to="/">EU Express</Link>
            </li>
          </ul>
        </FooterColumn>
        <FooterColumn>
          <h3>about us</h3>
          <ul>
            <li>
              <Link to="/">About Us</Link>
            </li>
            <li>
              <Link to="/">Affilities</Link>
            </li>
            <li>
              <Link to="/">Blog</Link>
            </li>
            <li>
              <Link to="/">Careers</Link>
            </li>
            <li>
              <Link to="/">Sitemap</Link>
            </li>
          </ul>
        </FooterColumn>
      </FooterLinks>
    </FooterWrapper>
  );
};

export default Footer;
