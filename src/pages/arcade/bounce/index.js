import React, { useEffect } from "react";
import Layout from "../../../components/layout";
import Seo from "../../../components/seo";
import ArcadeHomeAppBar from "../../../components/pages/arcade-home/ArcadeHomeAppBar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography';

const pathPrefix = typeof __PATH_PREFIX__ !== "undefined" ? __PATH_PREFIX__ : "";

// Fullscreen handler
const BouncePage = () => {

  useEffect(() => {
    const iframe = document.getElementById("bounce-iframe");

    // Function to adjust iframe height to content
    const adjustIframeHeight = () => {
      try {
        // Ensure we can access iframe content (works only for same-origin content)
        const iframeContent = iframe.contentWindow.document.documentElement;
        const iframeHeight = iframeContent.scrollHeight; // Get the full height of the content
        iframe.style.height = `${iframeHeight}px`; // Set the iframe height
      } catch (e) {
        console.error("Cannot access iframe contents due to cross-origin restrictions.");
      }
    };

    // Listen for iframe load event to adjust height
    iframe.addEventListener("load", adjustIframeHeight);

    // Cleanup listener on component unmount
    return () => {
      iframe.removeEventListener("load", adjustIframeHeight);
    };
  }, []);

  const handleFullScreen = () => {
    const iframe = document.getElementById("bounce-iframe");
    if (iframe.requestFullscreen) {
      iframe.requestFullscreen();
    } else if (iframe.mozRequestFullScreen) { // Firefox
      iframe.mozRequestFullScreen();
    } else if (iframe.webkitRequestFullscreen) { // Chrome, Safari, Opera
      iframe.webkitRequestFullscreen();
    } else if (iframe.msRequestFullscreen) { // IE/Edge
      iframe.msRequestFullscreen();
    }
  };

  return (
    <Layout>
      <ArcadeHomeAppBar />
      <Box sx={{ backgroundColor: "#222", padding: "20px 33px 0 33px" }}>
        {/* Game Header and Fullscreen Button Row */}
        <Grid container alignItems="center" justifyContent="space-between" sx={{ marginBottom: 2 }}>
          <Typography
            variant="h3"
            component="div"
            sx={{
              color: "#fff", // White text for the header
            }}
          >
            Bounce
          </Typography>

          <Button
            variant="contained"
            color="primary"
            onClick={handleFullScreen}
          >
            Fullscreen
          </Button>
        </Grid>

        {/* Game Iframe */}
        <Grid container spacing={2} justifyContent="center">
          <iframe
            id="bounce-iframe"
            src={`${pathPrefix}/malbran-games/bounce/index.html`}
            width="100%"
            style={{
              border: "3px solid #1AA6B7",
              width: "100%",
              height: "600px", // Set a default height
              transition: "height 0.3s ease", // Smooth height adjustment
            }}
            frameBorder="0"
            title="Bounce Game"
          />
        </Grid>

        <Box sx={{ color: "#fff" }}>
          <br />
          <Typography variant="h5">Mobile Controls</Typography>
          <p>...</p>
          <Typography variant="h5">Desktop Controls</Typography>
          <br />
          <p><small><strong>Move paddle:</strong></small> <br />Move mouse left and right</p>
          <p><small><strong>Pause Game:</strong></small> <br />Left click screen</p>
          <Typography variant="h5">Description</Typography>
          <p>Bounce is a fun and addictive arcade game where you use a paddle to bounce a ball and break all the blocks.</p>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </Box>
      </Box>
    </Layout>
  );
}

/**
 * Head export to define metadata for the page
 */
export const Head = () => <Seo title="Bounce Game" />

export default BouncePage;
