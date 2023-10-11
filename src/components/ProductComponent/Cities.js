import React, { useEffect } from 'react'
import LondonEngland from "../../assets/img/cities/london_england.jpg"
import HamburgGermany from "../../assets/img/cities/Hamburg-Germany.jpg"
import BarselonaSpain from "../../assets/img/cities/barselona_spain.jpg"
import NewYorkUs from "../../assets/img/cities/newYork_us.jpg"
import DubaiEmirates from "../../assets/img/cities/dubai.jpg"
import BerlinGermany from "../../assets/img/cities/berlin_germany.jpg"
import ParisFrance from "../../assets/img/cities/paris_france.jpg"


import { CardItemComponent } from '../InfoCard/CardItemComponent/CardItemComponent'


export const Cities = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
 }, []);
  return (
    
        <div className='infoCards'>
            <h2 className='infoCard-title'>The Most Interesting Cities in the World</h2>
            <ul className='infoCard-list'>
                <CardItemComponent path="/products" img={LondonEngland} alt="LondonEngland" text= "London, England"/>
                <CardItemComponent path="/products" img={HamburgGermany} alt="HamburgGermany" text= "Hamburg, Germany"/>
                <CardItemComponent path="/products" img={BarselonaSpain} alt="BarselonaSpain" text= "Barcelona, Spain"/>
                <CardItemComponent path="/products" img={NewYorkUs} alt="NewYorkUs" text= "New York, United States"/>
                <CardItemComponent path="/products" img={DubaiEmirates} alt="DubaiEmirates" text= "Dubai, United Arab Emirates"/>
                <CardItemComponent path="/products" img={BerlinGermany} alt="BerlinGermany" text= "Berlin, Germany"/>
                <CardItemComponent path="/products" img={ParisFrance} alt="ParisFrance" text= "Paris, France"/>
                
            </ul>
        </div>
      )
}