import React from 'react';
import styled from 'styled-components';

import Hero from './Hero';

const AppWrapper = styled.div`
  height: 100%;
`;

export default () => {
  return (
    <div>
      <Hero />
    </div>
  )
};