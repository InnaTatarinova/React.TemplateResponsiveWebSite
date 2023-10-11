import React, { useEffect } from 'react'
import WhitehavenAustralia from "../../assets/img/beaches/whitehaven-hill-inlet.jpg"
import CannonBeachUS from "../../assets/img/beaches/US_CannonBeach_US_Header.jpg"
import HorseshoeBeyBermuda from "../../assets/img/beaches/Horseshoe_bay_bermuda.jpg"
import MoheganBluffsRhodeIsland from "../../assets/img/beaches/Mohegan_bluffs.jpg"
import SiestaKeyFlorida from "../../assets/img/beaches/US_Siesta_Key_US_Header.jpg"


import { CardItemComponent } from '../InfoCard/CardItemComponent/CardItemComponent'


export const Beaches = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
 }, []);
  return (
    
        <div className='infoCards'>
            <h2 className='infoCard-title'>Most Beautiful Beaches in the World</h2>
            <ul className='infoCard-list'>
                <CardItemComponent path="/products" img={WhitehavenAustralia} alt="WhitehavenAustralia" text= "Whitehaven Beach: Whitsunday Island, Australia"/>
                <CardItemComponent path="/products" img={CannonBeachUS} alt="CannonBeachUS" text= "Cannon Beach: Cannon Beach, Oregon"/>
                <CardItemComponent path="/products" img={HorseshoeBeyBermuda} alt="HorseshoeBeyBermuda" text= "Horseshoe Bay Beach: Bermuda"/>
                <CardItemComponent path="/products" img={MoheganBluffsRhodeIsland} alt="MoheganBluffsRhodeIsland" text= "Mohegan Bluffs: New Shoreham, Rhode Island"/>
                <CardItemComponent path="/products" img={SiestaKeyFlorida} alt="SiestaKeyFlorida" text= "Siesta Beach: Siesta Key, Florida"/>
               
                
            </ul>
        </div>
      )
}