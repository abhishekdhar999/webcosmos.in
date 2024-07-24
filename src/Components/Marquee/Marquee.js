// Marquee.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

const marquee = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
`;

const MarqueeContainer = styled.div`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  box-sizing: border-box;
`;

const MarqueeText = styled.div`
  display: inline-block;
  padding-left: 100%;
  animation: ${marquee} 10s linear infinite;
`;

const Marquee = ({ words }) => {
  return (
    <MarqueeContainer>
      <MarqueeText>
        {words.map((word, index) => (
          <span key={index} style={{ marginRight: '2rem' }}>
            {word}
          </span>
        ))}
      </MarqueeText>
    </MarqueeContainer>
  );
};

export default Marquee;
