import React from 'react'
import Naviii from './Naviii';
import Mainheader from './Mainheader';
import Promo from './Promo';
import Team from './Team';
import Work from './Work';
import Statistics from './Statistics';
import Skills from './Skills';
import Pricingsection from './Pricingsection';
import Contactsection from './Contactsection';
import Footersection from './Footersection';
import Aboutsection from './Aboutsection';


export default function Templatetwo() {
  return (
    <>
    <Naviii/>
    <Mainheader/>
    <Aboutsection/>
    <Promo/>
    <Team/>
    <Statistics/>
    <Work/>
    <Skills/>
    <Pricingsection/>
    <Contactsection/>
    <Footersection/>
    </>
  )
}
