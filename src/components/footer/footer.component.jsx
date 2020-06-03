import React from "react";
import { ReactComponent as RightIcon } from "../../assets/img/icon-right.svg";

import {
  FooterWrapper,
  FooterTitleStyled,
  FooterSubtitleStyled,
  FooterFormStyled,
  InputStyled,
  SubscribeButton,
  FooterLinks,
  FooterColumn,
} from "./footer.styles";

const Footer = () => (
  <FooterWrapper>
    <FooterTitleStyled>subscribe to news</FooterTitleStyled>
    <FooterSubtitleStyled>
      Receive or newsletter on the latest deals and happenings. <br />
      You can unsubscirbe any time.
    </FooterSubtitleStyled>
    <FooterFormStyled>
      <InputStyled type="text" placeholder="your email address" />
      <SubscribeButton type="submit">
        <RightIcon></RightIcon>
      </SubscribeButton>
    </FooterFormStyled>
    <FooterLinks>
      <FooterColumn>
        <h3>help</h3>
        <ul>
          <li>
            <a href="/">Frequently Asked Questions</a>
          </li>
          <li>
            <a href="/">Help</a>
          </li>
          <li>
            <a href="/">How To Return</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
        </ul>
      </FooterColumn>
      <FooterColumn>
        <h3>delivery options</h3>
        <ul>
          <li>
            <a href="/">UK Next Day</a>
          </li>
          <li>
            <a href="/">UK Standard</a>
          </li>
          <li>
            <a href="/">EU Standard</a>
          </li>
          <li>
            <a href="/">EU Express</a>
          </li>
        </ul>
      </FooterColumn>
      <FooterColumn>
        <h3>about us</h3>
        <ul>
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/">Affilities</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">Careers</a>
          </li>
          <li>
            <a href="/">Sitemap</a>
          </li>
        </ul>
      </FooterColumn>
    </FooterLinks>
  </FooterWrapper>
);

export default Footer;
