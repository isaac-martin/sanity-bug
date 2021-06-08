import * as React from 'react';
import {GatsbyImage} from 'gatsby-plugin-image';
import {getGatsbyImageData} from 'gatsby-source-sanity';
// styles
const pageStyles = {
  color: '#232129',
  padding: 96,
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const headingAccentStyles = {
  color: '#663399',
};

const sanityImageConfig = {
  projectId: 'oijolsw2',
  dataset: 'production',
};

const sanityShopImageConfig = {
  projectId: 'a1gnyctg',
  dataset: 'production',
};

const houseWebp = `image-119072b0ced4e6169338c861288db5bf2d3d7283-1536x1024-webp`;

const brexWp = 'image-4c279d6eb8943f06061eeccf813f430186e4c19b-1298x826-webp';
const imageData = getGatsbyImageData(brexWp, {width: 800}, sanityImageConfig);
const shopImageData = getGatsbyImageData(houseWebp, {width: 800}, sanityShopImageConfig);

console.log({imageData, shopImageData});
// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <GatsbyImage image={imageData} />
      <GatsbyImage image={shopImageData} />

      <title>Home Page</title>
      <h1 style={headingStyles}>
        Congratulations
        <br />
        <span style={headingAccentStyles}>— you just made a Gatsby site! </span>
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </h1>
    </main>
  );
};

export default IndexPage;
