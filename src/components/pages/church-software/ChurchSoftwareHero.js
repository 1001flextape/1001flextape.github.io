import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { styled } from '@mui/system';
import { Typewriter } from 'react-simple-typewriter';
import backgroundImage from '../../../images/keyboard-typing-high-quality.gif';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'; // For Church Website Software
import SchoolIcon from '@mui/icons-material/School'; // For Education platform
import ChurchSoftwareHero2 from './churchSoftwareHero2';
import Branding from '../../branding/Branding';

// Hero section styling
const HeroSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'flex-start',
  height: 'calc(100vh - 50px)',
  // backgroundImage: `url(${backgroundImage})`,
  // backgroundSize: 'cover',
  // backgroundPosition: 'center',
  color: '#fff',
  textAlign: 'left',
  overflow: 'hidden',
  zIndex: 1,
  backgroundImage: `linear-gradient(
    30deg,
    hsl(240deg 100% 20%) 0%,
    hsl(221deg 100% 26%) 3%,
    hsl(213deg 100% 29%) 7%,
    hsl(203deg 100% 28%) 12%,
    hsl(188deg 100% 24%) 21%,
    hsl(169deg 100% 24%) 57%,
    hsl(151deg 74% 31%) 73%,
    hsl(146deg 56% 37%) 81%,
    hsl(141deg 46% 42%) 86%,
    hsl(137deg 39% 46%) 91%,
    hsl(132deg 35% 50%) 94%,
    hsl(128deg 36% 55%) 97%,
    hsl(123deg 37% 59%) 100%
  )`,
}));

// TextBox styling
const TextBox = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
  padding: theme.spacing(3),
  position: 'absolute',
  bottom: "10%",
  left: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  borderRadius: theme.shape.borderRadius,
}));

// Fade-up animation for list items
const FadeUpAnimation = styled(Box)(({ theme }) => ({
  opacity: 0,
  transform: 'translateY(20px)',
  animation: `fadeUp 1s ease-in-out forwards`,
  '@keyframes fadeUp': {
    '0%': {
      opacity: 0,
      transform: 'translateY(20px)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
}));

const ChurchSoftwareHero = () => {
  return (
    <HeroSection>
      <Container sx={{ zIndex: 2, height: "inherit", p: "0 !important" }}>
        <Branding />
        <ChurchSoftwareHero2 />
        <TextBox sx={{ minHeight: "192px" }}>
          <Typography variant="h2" sx={{ fontWeight: 'boldest', fontSize: { xs: '2rem', md: '3rem' } }}>
            <Typewriter words={['Church Software']} loop={1} typeSpeed={55} deleteSpeed={30} delaySpeed={500} />
          </Typography>

          {/* List with fade-up effect */}
          <Box sx={{ mt: 2 }}>
            <FadeUpAnimation sx={{ mb: 2.5 }}>
              <Box display="flex" alignItems="center">
                <AccountBalanceIcon sx={{ marginRight: 1, color: '#1AA6B7' }} />
                <Typography sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>
                  Church Website Software (in progress).
                </Typography>
              </Box>
            </FadeUpAnimation>

            <FadeUpAnimation>
              <Box display="flex" alignItems="center">
                <SchoolIcon sx={{ marginRight: 1, color: '#1AA6B7' }} />
                <Typography sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>
                  Education platform for rehabilitation/catechetical instruction (in development).
                </Typography>
              </Box>
            </FadeUpAnimation>
          </Box>
        </TextBox>
      </Container>
    </HeroSection>
  );
};

export default ChurchSoftwareHero;
