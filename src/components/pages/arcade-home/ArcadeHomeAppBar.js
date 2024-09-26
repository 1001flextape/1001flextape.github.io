import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import { navigate } from '@reach/router'; // For Gatsby

const pathPrefix = typeof __PATH_PREFIX__ !== "undefined" ? __PATH_PREFIX__ : "";

// Custom AppBar styling
const StyledAppBar = styled(AppBar)({
  background: 'linear-gradient(90deg, #1AA6B7 50%, rgb(2, 45, 65) 50%)', // Split AppBar background
  color: '#fff', // Ensure text is white for both colors
});

const ArcadeHomeAppBar = () => {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        {/* MinistryWare section (left side) */}
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#1AA6B7',
            paddingRight: '16px',
            cursor: 'pointer',
          }}
          onClick={() => navigate(`${pathPrefix}/`)}
        >
          <Typography
            variant="h6"
            component="div"
          >
            MinistryWare
          </Typography>
        </Box>

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
            style={{
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
