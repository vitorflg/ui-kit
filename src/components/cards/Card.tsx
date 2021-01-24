/** @jsx jsx */
import React, { ReactNode } from 'react';
import { Box, jsx } from 'theme-ui';

interface Card {
  children: ReactNode;
}

export const Card: React.FC<Card> = ({ children }) => {
  return (
    <Box sx={{ background: 'grey', borderRadius: 20, color: '#fff' }}>
      {children}
    </Box>
  );
};

export const CardHeader: React.FC<Card> = ({ children }) => {
  return <Box>{children}</Box>;
};

export const CardContent: React.FC<Card> = ({ children }) => {
  return <Box sx={{ padding: 3, textAlign: 'left' }}>{children}</Box>;
};
