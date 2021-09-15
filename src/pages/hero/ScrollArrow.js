import React from 'react';
import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  0% { opacity: 0; }
  40% { opacity: 0.6; }
  80% { opacity: 0; }
  100% { opacity: 0; }
`;

const ScrollWrapper = styled.div`
  display: inherit;
  justify-content: center;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 1rem;
  padding-right: 1rem;

  .arrows {
    width: 22px;
    height: 50px;
    margin: 0 0.5rem 1rem 0;
  }

  .arrows path {
    fill: transparent;
    stroke: #dab6c2;
    stroke-width: 2px;
    stroke-linecap: round;
    stroke-linejoin: round;
    animation: ${animation} 2s infinite;
    -webkit-animation: ${animation} 2s infinite;
  }

  .arrows .arrow1 {
    animation-delay: -1s;
    -webkit-animation-delay: -1s;
  }

  .arrows .arrow2 {
    animation-delay: -0.8s;
    -webkit-animation-delay: -0.8s;
  }

  .arrows .arrow3 {
    animation-delay: -0.4s;
    -webkit-animation-delay: -0.4s;
  }
`;


const ScrollArrow = () => {
  return (
    <ScrollWrapper>
      <svg className="arrows">
        <path className="arrow1" d="M0 0 L10 10 L20 0"></path>
        <path className="arrow2" d="M0 20 L10 30 L20 20"></path>
        <path className="arrow3" d="M0 40 L10 50 L20 40"></path>
      </svg>
      <span>Scroll</span>
    </ScrollWrapper>
  )
};

export default ScrollArrow;