import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { theme } from "../../helpers/theme";
import { device } from "../../helpers/useMediaQuery";
import { images } from "../images/library"

const Wrapper = styled.div`
  background: ${theme.colors.dark[0]};
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  padding: ${theme.space[5]} ${theme.space[6]};

  @media ${device.laptop} {
    justify-content: space-between;
    padding: ${theme.space[9]} ${theme.space[10]};
  }
`;

const LinksWrapper = styled.ul`
  display: flex;
  list-style-type: none;
  padding: ${theme.space[0]};
`;

const LinkItem = styled.li`
  padding: ${theme.space[3]};

  .active {
    color: ${theme.colors.accent[0]};

    &::after {
      position: absolute;
      content: "";
      width: 100%;
      height: 2px;
      bottom: ${theme.space[0]};
      left: ${theme.space[0]};
      background: ${theme.colors.accent[0]};
      transform: none;
    }
  }

  &:hover {
    a {
      color: ${theme.colors.accent[0]};

      &::after {
        transform: scaleX(1);
        transform-origin: left;
      }
    }
  }
`;

const LinkStyles = styled(Link)`
  min-height: 0vw;
  font-size: clamp(0.875rem, 0.825rem + 0.25vw, 1.05rem);
  font-weight: ${theme.fontWeights.bold};
  position: relative;
  padding: ${theme.space[5]};
  display: block;

  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 2px;
    bottom: ${theme.space[0]};
    left: ${theme.space[0]};
    background: ${theme.colors.accent[0]};
    transition: transform 0.3s;
    transform: scaleX(0);
    transform-origin: right;
  }
`;

const LogoLink = styled(Link)`
  align-self: center;
`;

const Logo = styled.img`
  display: inherit;
  width ${theme.space[8]};

  @media ${device.tablet} { 
    width: ${theme.space[9]};
  }

  @media ${device.laptop} { 
    width: ${theme.space[10]};
  }
`;

const NavLinks = ({ navLinks }) => (
  <LinksWrapper>
    {navLinks.map((link) => (
      <LinkItem key={link.name}>
        <LinkStyles
          to={link.link}
          activeClassName='active'
        >
          {link.name}
        </LinkStyles>
      </LinkItem>
    ))}
  </LinksWrapper>
);

const Navigation = () => (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              navLinks {
                name
                link
              }
            }
          }
        }
      `}
      render={(data) => (
        <Wrapper>
          <LogoLink to='/'>
            <Logo src={images("logo")} />
          </LogoLink>
          <NavLinks navLinks={data.site.siteMetadata.navLinks} />
        </Wrapper>
      )}
    />
  );

export default Navigation;
