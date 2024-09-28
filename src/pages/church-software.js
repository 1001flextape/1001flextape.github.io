import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import ChurchSoftwareHero from "../components/pages/church-software/ChurchSoftwareHero";
// import Timeline from "../components/Timeline"; // Custom timeline component
import UnderConstruction from "../components/pages/church-software/UnderConstruction";

import { Box, Typography, Button, Container } from '@mui/material';
const ChurchSoftwarePage = () => (

  <Layout>
    <ChurchSoftwareHero />



    {/* Under Construction Section */}
    <UnderConstruction />

    <Container>
      {/* Spacing */}
      <div style={{ margin: "60px 0" }}></div>

      {/* Timeline Section */}
      <h3 style={{ textAlign: "center", marginBottom: "30px" }}>Development Timeline</h3>
      {/* <Timeline /> */}

      {/* Section: RCM */}
      <div style={{
        maxWidth: 'var(--size-content)', // Limit the width for the content
        margin: '50px auto',
      }}>
        <h3>RCM (React Component Management System)</h3>
        <p>
          The RCM is a pioneering digital platform designed to handle website generation with
          xAPI requirements. While it’s not directly part of the church software, RCM stands as
          an independent, open-source project that ensures flexible, scalable website generation
          for a variety of use cases.
        </p>
        <p>
          Built for the open-source community, RCM fosters long-term stability by promoting
          collaborative development. It’s a tool for digital pioneers across multiple sectors,
          not just ministry.
        </p>
      </div>

      {/* Section: Website */}
      <div style={{
        maxWidth: 'var(--size-content)', // Limit the width for the content
        margin: '50px auto',
      }}>
        <h3>Website</h3>
        <p>
          Once RCM is completed, it will serve as the foundation for the church website software.
          This system will evolve into a full-featured Church Management System (CMS), designed
          for real-time use anywhere, at any time. The goal is to create a system that can be
          used across various physical locations to support any kind of church activity.
        </p>
      </div>

      {/* Section: Educational */}
      <div style={{
        maxWidth: 'var(--size-content)', // Limit the width for the content
        margin: '50px auto',
      }}>
        <h3>Educational</h3>
        <p>
          The RCM is also built with education in mind. It follows xAPI guidelines to ensure full
          integration with existing educational software. This will allow churches and
          non-profits to easily share teachings and resources with one another, fostering
          collaborative learning environments.
        </p>
      </div>

      {/* Additional spacing at the end */}
      <div style={{ marginBottom: "80px" }}></div>
    </Container>

  </Layout>
);

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Church Software" />

export default ChurchSoftwarePage;
