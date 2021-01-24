/** @jsx jsx */
import { Box, jsx, Styled } from 'theme-ui';
import React from 'react';
import LayoutContainer from '../../components/containers/LayoutContainer';

const Home: React.FC = () => {
  return (
    <Box sx={{ mt: 6 }}>
      <LayoutContainer>
        <Styled.h1>ui-kit</Styled.h1>
      </LayoutContainer>
    </Box>
  );
};

export default Home;
