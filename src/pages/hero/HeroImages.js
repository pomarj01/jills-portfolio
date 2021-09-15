import React from 'react';
import styled, { css } from 'styled-components';
import merge from 'lodash/merge';
import find from 'lodash/find';
import { image } from '../../components/images/Images';


const ImageStyles = styled.img`
  ${props => props.position && css`
    position: ${props.position};
  `}

  ${props => props.size && css`
    width: ${props.size};
  `}

   ${props => props.left && css`
    left: ${props.left};
  `}

   ${props => props.right && css`
    right: ${props.right};
  `}

   ${props => props.top && css`
    top: ${props.top};
  `}

   ${props => props.bottom && css`
    bottom: ${props.bottom};
  `}
`;


const imageList = [
  {
    name: "main_image",
    size: "100%",
  },
  {
    name: "vertical_crosses",
    position: "absolute",
    size: "5%",
  },
  {
    name: "pink_cross",
    position: "absolute",
    top: "13%",
    left: "25%",
    size: "4%",
  },
  {
    name: "blue_cross",
    position: "absolute",
    top: "2%",
    right: "5%",
    size: "4%",
  },
  {
    name: "double_waves",
    position: "absolute",
    top: "-12%",
    right: "16%",
    size: "15%",
  },
  {
    name: "dots_oblong",
    position: "absolute",
    bottom: "-13%",
    left: "10%",
    size: "25%",
  },
  {
    name: "circles",
    position: "absolute",
    bottom: "-5%",
    right: "30%",
    size: "10%",
  },
  {
    name: "lined_circle",
    position: "absolute",
    size: "15%",
    right: "-70%",
    top: "25%;",
  },
];


const mergedImages = imageList.map((img) => {
  return merge(img, find(image, { name: img.name }));
});


const ContentImages = () => {
  return (
    <>
      {mergedImages.map((img, i) => (
        <ImageStyles
          key={i}
          className={img.name}
          position={img.position}
          src={img.value}
          size={img.size}
          top={img.top}
          left={img.left}
          bottom={img.bottom}
          right={img.right}
          alt={img.name}
        />
      ))}
    </>
  );
} 

export default ContentImages;