import React from 'react';
import { AppBar, Toolbar, Typography, Box, useMediaQuery } from '@mui/material';
import { styled } from '@mui/system';
import { navigate } from '@reach/router'; // For Gatsby
import logo from "../../../images/ministry-ware-logo.png";
import { useTheme } from '@mui/material/styles';

const pathPrefix = typeof __PATH_PREFIX__ !== "undefined" ? __PATH_PREFIX__ : "";

// Custom AppBar styling
const StyledAppBar = styled(AppBar)({
  background: 'linear-gradient(90deg, #1AA6B7 50%, rgb(2, 45, 65) 50%)', // Split AppBar background
  color: '#fff', // Ensure text is white for both colors
});

const Branding = styled(Box)({
  display: 'flex',
  alignItems: 'center', // Align logo and text vertically
  gap: '10px', // Space between logo and text
  cursor: 'pointer',
});

const BrandingText = styled(Typography)({
  // Add text stroke effect
  WebkitTextStroke: '1px rgba(0, 0, 0, 0.7)', // Adjust the opacity to achieve a softer black
  fontWeight: 'bold', // Set a high font weight
});

const ArcadeHomeAppBar = () => {
  const theme = useTheme();
  const isTabletOrMobile = useMediaQuery(theme.breakpoints.down('md'));

  if (!isTabletOrMobile) {
    return null;
  }

  return (
    <StyledAppBar position="static">
      <Toolbar>
        {/* MinistryWare section (left side) */}
        <Branding
          sx={{
            flexGrow: 1,
            backgroundColor: '#1AA6B7',
            paddingRight: '16px',
          }}
          onClick={() => navigate(`${pathPrefix}/`)}
        >
          <Box component="img" src={logo} alt="MinistryWare logo" sx={{ height: 30, width: 30, margin: 0 }} />
          <BrandingText variant="h6" component="div" sx={{ lineHeight: '35px' }}>
            MinistryWare
          </BrandingText>
        </Branding>

        {/* Arcade section (right side) */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'rgb(2, 45, 65)',
            paddingLeft: '16px',
            cursor: 'pointer',
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontFamily: `"Jacquarda Bastarda 9", serif`,
              fontSize: '32px',
              color: 'aqua',
            }}
          >
            Arcade
          </Typography>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

export default ArcadeHomeAppBar;
