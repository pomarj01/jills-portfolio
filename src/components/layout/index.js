import React from "react";
import styled from "styled-components";
import Navigation from "../navigation";
import Button from "../button";
import { images, icons } from "../../components/images/library";
import { theme, device } from "../../utils";

const footerSVG = images("footer_wave");

const FooterWrapper = styled.div`
  background: url(${footerSVG});
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-position: 80% 20%;
  background-size: 220%;
  background-repeat: no-repeat;
  padding-top: ${theme.space[9]};

  @media ${device.tablet} {
    background-position: 50% 40%;
    background-size: 100%;
  }

  @media ${device.l_laptop} {
    background-position: 50% 20%;
    padding-top: ${theme.space[11]};
    margin-top: ${theme.space[9]};
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  padding: ${theme.space[10]} ${theme.space[0]} ${theme.space[5]};

  @media ${device.tablet} {
    padding: ${theme.space[11]} ${theme.space[0]} ${theme.space[9]};
  }
`;

const Content = styled.div`
  font-size: clamp(1.5rem, 0.6429rem + 1.1607vw, 2.5rem);
  font-weight: ${theme.fontWeights.bold};
`;

const FooterBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  background: ${theme.colors.accent[0]};
  height: 68px;
  padding: 0 1rem;
`;

const Author = styled.span`
  font-weight: ${theme.fontWeights.bold};
  display: inherit;

  img {
    padding: 0 8px;
    width: 30px;
  }
`;

const SocialMedia = styled.div`
  display: flex;

  img {
    width: 20px;
  }

  img:first-child {
    margin-right: ${theme.space[5]};
  }
`;

const Layout = ({ children, location }) => {
  const noFooter = [`/about`];
  const noLayout = [`/about/development`, `/about/design`];
  const layoutLess = noLayout.includes(location.pathname.replace(/\/+$/, ""));
  const hideFooter = noFooter.includes(location.pathname.replace(/\/+$/, ""));

  return (
    <>
      {layoutLess ? null : <Navigation />}

      {children}

      {(layoutLess || hideFooter) ? null : (
        <FooterWrapper>
          <ContentWrapper>
            <Content>Wanna chat?</Content>
            <Button variant="custom" customColor="#252835" customText="#CEACB7">
              Contact me
            </Button>
          </ContentWrapper>
          <FooterBar>
            <Author>
              Developed with
              <img src={icons("heart")} alt="heart icon" />
              by Jill Pomares
            </Author>
            <SocialMedia>
              <img src={icons("github_icon")} alt="github icon" />
              <img src={icons("linkedIn")} alt="linkedin icon" />
            </SocialMedia>
          </FooterBar>
        </FooterWrapper>
      )}
    </>
  );
};

export default Layout;
