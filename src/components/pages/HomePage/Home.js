import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour, galleryImages } from './Data';
import Pricing from '../../Pricing';
import WSPGallery from '../../WSPGallery';

function Home({dental_info,images}) {
  
  
  dental_info.map(todo => (
    homeObjOne.description = todo.description
  ))
  
  return (
    <>
      <HeroSection {...homeObjOne} />
      <WSPGallery
        galleryImages={images? images:galleryImages}
      />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjTwo} />
      <Pricing />
      <HeroSection {...homeObjFour} />
    </>
  );
}

export default Home;
