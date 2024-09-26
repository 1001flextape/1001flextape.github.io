import React, { useEffect } from 'react';
import { AppBar, Tabs, Tab, Toolbar, Typography, styled, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useLocation, navigate } from '@reach/router'; // For Gatsby, @reach/router is used

import ArcadeIcon from '@mui/icons-material/Gamepad';
import SoftwareIcon from '@mui/icons-material/Business';
import AboutIcon from '@mui/icons-material/Info';
import DonateIcon from '@mui/icons-material/AttachMoney';

// Access the pathPrefix from the Gatsby global variable
const pathPrefix = typeof __PATH_PREFIX__ !== "undefined" ? __PATH_PREFIX__ : "";

// Styled AppBar
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#1AA6B7', // Hover effect for Tabs
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)', // Shadow for AppBar
}));

// Styled Tabs
const StyledTabs = styled(Tabs)(({ theme }) => ({
  marginLeft: 'auto', // Align tabs to the right
  '& .MuiTab-root': {
    color: '#DAECF3', // Default text color for Tabs
    textTransform: 'none', // Remove uppercase transformation
    fontSize: '16px',
    padding: '12px 20px',
  },
  '& .Mui-selected': {
    color: '#FFFFFF', // Text color when selected
    backgroundColor: 'rgb(2, 45, 65)', // Background color for selected tab
  },
  '& .MuiTab-root:hover': {
    backgroundColor: '#022D41', // Background color for AppBar
  },
}));

const TopNav = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md')); // Show only on desktop screens
  const location = useLocation();
  const [value, setValue] = React.useState();

  // Update tab selection based on the current path
  useEffect(() => {
    switch (location.pathname) {
      case `${pathPrefix}/`:
        setValue(0);
        break;
      case `${pathPrefix}/church-software/`:
        setValue(1);
        break;
      case `${pathPrefix}/about/`:
        setValue(2);
        break;
      case `${pathPrefix}/donate/`:
        setValue(3);
        break;
      default:
        setValue(0);
    }
  }, [location.pathname]);

  // Conditionally render the top nav only on desktop
  if (!isDesktop) return null;

  return (
    <StyledAppBar position="static">
      <Toolbar
        style={{
          margin: `0 auto`,
          padding: `0 var(--size-gutter)`,
          display: `flex`,
          alignItems: `center`,
          justifyContent: `space-between`,
          width: "100%",
          maxWidth: "var(--size-content)",
        }}
      >
        <Typography variant="h6" style={{ color: '#DAECF3', fontWeight: 'bold' }}>
          MinistryWare
        </Typography>

        <StyledTabs
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            // Navigate to corresponding page
            switch (newValue) {
              case 0:
                navigate(`${pathPrefix}/`);
                break;
              case 1:
                navigate(`${pathPrefix}/church-software/`);
                break;
              case 2:
                navigate(`${pathPrefix}/about/`);
                break;
              case 3:
                navigate(`${pathPrefix}/donate/`);
                break;
              default:
                navigate(`${pathPrefix}/`);
            }
          }}
        >
          <Tab icon={<ArcadeIcon />} label="Arcade" />
          <Tab icon={<SoftwareIcon />} label="Software" />
          <Tab icon={<AboutIcon />} label="About" />
          <Tab icon={<DonateIcon />} label="Donate" />
        </StyledTabs>
      </Toolbar>
    </StyledAppBar>
  );
};

export default TopNav;
