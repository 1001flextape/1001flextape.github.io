import React from 'react';
import { AppBar, Box, Toolbar, Typography, Card, CardMedia, CardContent, Grid } from '@mui/material';
import { styled } from '@mui/system';
import { useLocation, navigate } from '@reach/router'; // For Gatsby
import bounceImage from "../../../images/bouncing_ball_game_arcade_style-crop.jpg"

const pathPrefix = typeof __PATH_PREFIX__ !== "undefined" ? __PATH_PREFIX__ : "";

// Arcade Card styles
const StyledCard = styled(Card)({
  maxWidth: 345,
  margin: '20px auto',
  backgroundColor: '#222', // Dark arcade background for card
  color: '#fff',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)', // Give it a cool shadow
  cursor: "pointer",
});

// ArcadeHomeHero Component
const ArcadeHomeList = () => {
  return (
    <Box>
      {/* Game Cards */}
      <Grid container spacing={2} justifyContent="center" sx={{ paddingTop: 2 }}>

        {/* Pacman Card
        // <Grid item xs={12} md={6}>
        //   <StyledCard>
        //     {/* Pacman image - placeholder for now 
        //     <CardMedia
        //       component="img"
        //       height="140"
        //       alt="Pacman Game"
        //     />
        //     <CardContent>
        //       <Typography gutterBottom variant="h5" component="div">
        //         Pacman
        //       </Typography>
        //       <Typography variant="body2" color="white">
        //         Play the classic arcade game where you guide Pacman to eat all the dots and avoid the ghosts.
        //       </Typography>
        //     </CardContent>
        //   </StyledCard>
        // </Grid> */}

        {/* Bounce Game Card */}
        <Grid item xs={12} md={6}>
          <div>
            <Typography
              variant="body1"
              component="div"
              style={{
                padding: "0 23px",
                fontStyle: 'italic',
                fontSize: '18px',
                color: "#555", // A subtle gray color for the text
              }}
            >
              The Bill Wilson and Dr. Bob Smith arcade.
            </Typography>
          </div>
          <StyledCard
            onClick={() => navigate(`${pathPrefix}/arcade/bounce/`)}
          >
            {/* Bounce Game image - placeholder for now */}
            <CardMedia
              component="img"
              height="140"
              image={bounceImage}
              alt="Bounce Game"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Bounce
              </Typography>
              <Typography variant="body2" color="white">
                Bounce is a fun and addictive arcade game where you use a paddle to bounce a ball and break all the blocks.
              </Typography>
            </CardContent>
          </StyledCard>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ArcadeHomeList;
