import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "../button";
import { theme } from "../../helpers/theme";
import { device } from "../../helpers/useMediaQuery";


const DefaultCard = styled.div`
  background: ${(props) => props.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${theme.space[0]} ${theme.space[9]};
  padding: ${theme.space[5]};
  width: 100%;
  border-radius: ${theme.radii.base};

  @media ${device.laptop} {
    padding: ${theme.space[10]} ${theme.space[9]};
    width: 60%;
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: ${theme.space[5]} ${theme.space[0]};

  @media ${device.tablet} {
    padding: ${theme.space[5]};
    margin-bottom: ${theme.space[5]};
  }
`;

const Header = styled.h2`
  min-height: 0vw;
  font-size: clamp(1.25rem, 0.25rem + 3.3333vw, 2rem);
  font-weight: ${theme.fontWeights.bold};
`;

const CardDescription = styled.div`
  display: flex;
  padding: ${theme.space[5]};
  text-align: center;

  @media ${device.laptop} {
    padding: ${theme.space[5]} ${theme.space[10]};
  }
`;

const Description = styled.span`
  min-height: 0vw;
  font-size: clamp(1rem, 0.8125rem + 0.8333vw, 1.25rem);
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CardTags = styled.div`
  display: none;

  @media ${device.tablet} {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: ${theme.space[5]};
  }
`;

const Tag = styled.div`
  background: ${(props) => props.color};
  font-size: 12px;
  font-weight: ${theme.fontWeights.bold};
  padding: ${theme.space[3]} ${theme.space[5]};
  margin-right: ${theme.space[3]};
  margin-bottom: ${theme.space[3]};
  border-radius: ${theme.radii.round};
`;

const CardMedia = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  padding: ${theme.space[5]};
  ${(props) => props.background !== 'none' ? `background: ${props.background}` : ''};
`;


const Image = styled.img`
  width: 100%;
  overflow: hidden;
  border-radius: ${theme.radii.base};
  box-shadow: 0px 50px 100px rgba(92, 99, 105, 0.15);
  margin-left: ${theme.space[3]};

  &:not(:first-child) {
    display: none;
  }

  @media ${device.tablet} {
    & {
      width: ${(props) => (props.size ? `${props.size}` : "100%")};
    }

    &:not(:first-child) {
      display: flex;
    }
  }
`;


// const truncateDescription = (str) => {
//   return str.length > 150 
//     ? str.substring(0, 150) + "..."
//     : str;
// }

// NOTE: Refactor this card component to make it more flexuble in the future
// NOTE: use regex to get the first sentence on card description
 

const BaseCard = (props) => {
  const {
    background,
    header,
    description,
    tags,
    tagsColor,
    media,
    mediaBackground,
    mediaSize,
    mediaWrapperStyles,
    imageStyles,
    cta,
    ctaContent,
    ctaDisabledButton,
    ctaVariant,
    customColor,
    customText,
    ctaOnClick
  } = props;


  return (
    <DefaultCard background={background}>
      <CardHeader>
        <Header>{header || "Title not provided"}</Header>
      </CardHeader>

      <CardDescription>
        <Description>{description || "Description not provided"}</Description>
      </CardDescription>

      <CardTags>
        {(tags &&
          tags.map((tag, i) => (
            <Tag 
              key={i}
              color={tagsColor}
            > {tag} </Tag>
          ))) ||
          <span> Tag not provided </span>}
      </CardTags>

      <CardMedia background={mediaBackground} style={(mediaWrapperStyles)}>
        {(media &&
          media.map((img, i) => (
            <Image 
              src={img}
              key={i}
              size={mediaSize}
              style={imageStyles}
            />
          ))) || <span> Image not provided </span>}
      </CardMedia>

      {cta && (
        <Button
          variant={ctaVariant}
          label={ctaContent}
          disabled={ctaDisabledButton}
          onClick={ctaOnClick}
          customText={customText}
          customColor={customColor}
        />
      )}
    </DefaultCard>
  );
};

BaseCard.propTypes = {
  background: PropTypes.string,
  header: PropTypes.string,
  description: PropTypes.string,
  tagsColor: PropTypes.string,
  tags: PropTypes.array,
  media: PropTypes.array,
  mediaBackground: PropTypes.string,
  mediaSize: PropTypes.string,
  cta: PropTypes.bool,
  ctaVariant: PropTypes.string,
};

BaseCard.defaultProps = {
  mediaSize: "100%",
  mediaBackground: "none",
  cta: true,
  ctaVariant:"primary"
};

export default BaseCard ;
