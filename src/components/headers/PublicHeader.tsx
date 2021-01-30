/** @jsx jsx */
import React, { ReactNode } from 'react';
import { Box, jsx } from 'theme-ui';

interface PublicHeader {
  children: ReactNode;
}

export const PublicHeader: React.FC<PublicHeader> = ({ children }) => {
  return (
    <Box sx={{ background: 'grey', borderRadius: 20, color: '#fff' }}>
      {children}
    </Box>
  );
};

