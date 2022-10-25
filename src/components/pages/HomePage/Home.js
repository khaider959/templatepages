import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour, galleryImages } from './Data';
import Pricing from '../../Pricing';
import WSPGallery from '../../WSPGallery';

function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <WSPGallery
        galleryImages={galleryImages}
      />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjTwo} />
      <Pricing />
      <HeroSection {...homeObjFour} />
    </>
  );
}

export default Home;
