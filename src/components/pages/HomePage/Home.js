import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour, galleryImages } from './Data';
import Pricing from '../../Pricing';
import WSPGallery from '../../WSPGallery';
import Navbar from '../../Navbar';
import Footer from '../Footer.js/Footer';

function Home({dental_info,images,boxes}) {
  
  let background;
  let style;
  let fontcolor;
  let fontsize;

  dental_info.map(todo => (
    homeObjOne.description = todo.description
  ))

  boxes.map((box) => (
    background=box.color,
    style=box.fontstyle,
    fontcolor=box.fontcolor,
    fontsize=box.fontsize
  ))

  if(background=='light'){
    homeObjOne.lightBg=true;
  }
  if(background=='dark'){
    homeObjOne.lightBg=false;
  }
  
  return (
    <>
      <Navbar todos={dental_info}/>
      <HeroSection {...homeObjOne} />
      <WSPGallery
        galleryImages={images? images:galleryImages}
      />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjTwo} />
      <Pricing />
      <HeroSection {...homeObjFour} />
      <Footer todos={dental_info}/>
    </>
  );
}

export default Home;
