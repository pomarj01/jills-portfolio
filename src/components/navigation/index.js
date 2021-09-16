import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { device } from "../../utils/devices";

const Wrapper = styled.div`
  display: inherit;
  flex-direction: row;
  justify-content: center;
  padding: 2rem 4rem;
  width: 100%;

  @media ${device.laptop} {
    justify-content: flex-end;
  }
`;

const LinksWrapper = styled.ul`
  display: flex;
  list-style-type: none;
`;

const LinkItem = styled.li`

  padding: 0.5rem;
  
  .active {
    color: #ceacb7;

    &::after {
      position: absolute;
      content: "";
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background: #ceacb7;
      transform: none;
    }
  }

  &:hover {
    a {
      color: #ceacb7;

      &::after {
        transform: scaleX(1);
        transform-origin: left;
      }
    }
  }
`;

const LinkStyles = styled(Link)`
  font-size: clamp(1rem, 0.8125rem + 0.8333vw, 1.25rem);
  font-weight: 800;
  color: #f0f0f0;
  position: relative;
  padding: 1rem;
  display: block;

  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background: #ceacb7;
    transition: transform 0.3s;
    transform: scaleX(0);
    transform-origin: right;
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
          <NavLinks navLinks={data.site.siteMetadata.navLinks} />
        </Wrapper>
      )}
    />
  );

export default Navigation;
