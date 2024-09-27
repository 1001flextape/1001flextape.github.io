import React from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import logo from "../../images/ministry-ware-logo.png";
import { styled } from '@mui/system';
import { useTheme } from '@mui/material/styles';

const BrandingContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  cursor: 'pointer',
  paddingLeft: "24px",
  paddingTop: "16px",
});

const BrandingText = styled(Typography)({
  // Add text stroke effect
  WebkitTextStroke: '1px rgba(0, 0, 0, 0.7)', // Adjust the opacity to achieve a softer black
  fontWeight: 'bold', // Set a high font weight
});

const Branding = ({ onClick }) => {
  const theme = useTheme();
  const isTabletOrMobile = useMediaQuery(theme.breakpoints.down('md'));

  if (!isTabletOrMobile) {
    return null; // Render nothing on desktop
  }

  return (
    <BrandingContainer onClick={onClick}>
      <Box component="img" src={logo} alt="MinistryWare logo" sx={{ height: 30, width: 30, margin: 0 }} />
      <BrandingText variant="h6" component="div">
        MinistryWare
      </BrandingText>
    </BrandingContainer>
  );
};

export default Branding;
