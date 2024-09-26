import React, { useEffect } from 'react';
import { BottomNavigation, BottomNavigationAction, styled } from '@mui/material';
import ArcadeIcon from '@mui/icons-material/Gamepad';
import SoftwareIcon from '@mui/icons-material/Business';
import AboutIcon from '@mui/icons-material/Info';
import DonateIcon from '@mui/icons-material/AttachMoney';
import { useLocation, navigate } from '@reach/router'; // For Gatsby
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

// Access the pathPrefix from the Gatsby global variable
const pathPrefix = typeof __PATH_PREFIX__ !== "undefined" ? __PATH_PREFIX__ : "";

// Styled Bottom Navigation
const StyledBottomNavigation = styled(BottomNavigation)(({ theme }) => ({
  backgroundColor: '#1AA6B7',
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
  boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.3)', // Add shadow for depth
}));

// Styled Bottom Navigation Action
const StyledBottomNavigationAction = styled(BottomNavigationAction)(({ theme }) => ({
  color: '#DAECF3', // Default text color
  transition: 'background-color 0.3s, color 0.3s', // Smooth transition for color changes
  '&.Mui-selected': {
    backgroundColor: '#022D41', // Darker shade for selected state
    color: '#ffffff', // Ensure selected state text color is visible
  },
  '&:hover': {
    backgroundColor: 'rgba(218, 236, 243, 0.3)', // Light transparent hover effect
  },
  '&:active': {
    backgroundColor: '#022D41', // Ensure touch/click state uses the same color as selected
    color: '#ffffff', // Ensure text is visible on touch/click
  },
  // Disable the focus color and state
  '&:focus': {
    outline: 'none', // Remove focus outline
    backgroundColor: '#022D41', // Ensure touch/click state uses the same color as selected
  },
  // Ensure text is always visible
  '& .MuiBottomNavigationAction-label': {
    color: '#DAECF3', // Always visible text color
    display: 'block',
    opacity: '1',
    paddingTop: 0,
  },
  '&': {
    padding: '0px 12px',
  },
}));

const BottomNav = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const location = useLocation();
  const [value, setValue] = React.useState();

  // Update tab selection based on the current path
  useEffect(() => {
    console.log('location.pathname', location.pathname)
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

  if (!isMobile) return null;

  return (
    <StyledBottomNavigation
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
      <StyledBottomNavigationAction label="Arcade" icon={<ArcadeIcon />} />
      <StyledBottomNavigationAction label="Software" icon={<SoftwareIcon />} />
      <StyledBottomNavigationAction label="About" icon={<AboutIcon />} />
      <StyledBottomNavigationAction label="Donate" icon={<DonateIcon />} />
    </StyledBottomNavigation>
  );
};

export default BottomNav;