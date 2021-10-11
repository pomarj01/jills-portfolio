import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "../button";
import { device } from "../../utils";

const CardContent = styled.div`
  background: ${(props) => props.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 2rem;
  padding: 2rem 1rem;
  width: 100%;
  border-radius: 5px;

  @media ${device.laptop} {
    padding: 4rem;
    width: 60%;
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0;

  @media ${device.tablet} {
    padding: 1rem;
    margin-bottom: 1rem;
  }
`;

const Header = styled.h2`
  min-height: 0vw;
  font-size: clamp(1rem, 0.25rem + 3.3333vw, 2rem);
  font-weight: 700;
`;

const CardDescription = styled.div`
  display: flex;
  padding: 0;
  text-align: center;
  order: 1;

  @media ${device.laptop} {
    padding: 1rem 4rem;
  }

  @media ${device.tablet} {
    order: 0;
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
    padding: 1rem;
  }
`;

const Tag = styled.div`
  background: ${(props) => props.color};
  font-size: 12px;
  font-weight: 800;
  padding: 8px 16px;
  margin: 0 0.5rem 0.5rem 0;
  border-radius: 50px;
`;

const CardMedia = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  padding: 1rem;
  order: 0;

  @media ${device.tablet} {
    order: 0;
    padding: 1rem 2rem;
  }
`;

const Image = styled.img`
  max-width: 400px;
  width: 100%;
  border-radius: 5px;
  margin: 1rem;
  box-shadow: 0px 50px 100px rgba(92, 99, 105, 0.15);

  &:nth-child(2) {
    display: none;
  }
  
  @media ${device.tablet} {
    &:nth-child(2) {
      display: block;
    }
  }
`;

const Divider = styled.span`
  border-bottom: 1px solid #252835;
  width: 100%;
  padding: 1rem;
  order: 1;

  @media ${device.tablet} {
    display: none;
  }
`;


// const truncateDescription = (str) => {
//   return str.length > 150 
//     ? str.substring(0, 150) + "..."
//     : str;
// }


// NOTE::create button component
// NOTE: use regex to get the first sentence on card description



const Card = (props) => {
  const { background, header, description, tags, tagsColor, images, cta, ctaContent } = props;

  return (
    <CardContent background={background}>
      <CardHeader>
        <Header>{header || "Title not provided"}</Header>
      </CardHeader>

      <CardDescription>
        <Description>{description || "Description not provided"}</Description>
      </CardDescription>

      <CardTags>
        {tags &&
          tags.map((tag, i) => (
            <Tag key={i} color={tagsColor}>
              {tag || "Tag not provided"}
            </Tag>
          ))}
      </CardTags>

      <CardMedia>
        {(images && images.map((img, i) => <Image src={img} key={i} />)) || (
          <span>Image not provided</span>
        )}
      </CardMedia>

      <Divider />

      {cta && (
        <>
          <Button variant="secondary" label={ctaContent} device="xsmallUp" />
          <Button variant="secondary" label={ctaContent} device="largeUp" />
          <Button variant="primary" disabled label="Disabled" />
        </>
      )}
    </CardContent>
  );
};

Card.propTypes = {
  background: PropTypes.string,
  header: PropTypes.string,
  description: PropTypes.string,
  tagsColor: PropTypes.string,
  tags: PropTypes.array,
  images: PropTypes.array,
  cta: PropTypes.bool,
};

Card.defaultProps = {
  cta: true,
};

export default Card;
