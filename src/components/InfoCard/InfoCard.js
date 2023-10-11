import React from 'react';
import { CardItemComponent } from './CardItemComponent/CardItemComponent';
import "./InfoCard.css";
import castlePhoto from "../../assets/img/castle_1.jpg";
import mountainPhoto from "../../assets/img/mountains_1.jpg";
import seaPhoto from "../../assets/img/sea_1.jpg";
import cityPhoto from "../../assets/img/city_1.jpg";
import junglePhoto from "../../assets/img/jungle_1.jpg"

export const InfoCard = () => {
  return (
    <div className='infoCards'>
        <h2 className='infoCard-title'>WELCOME TO OUR WONDERFUL WORLD!</h2>
        <ul className='infoCard-list'>
            <CardItemComponent path="/products/castles" img={castlePhoto} label="Castle" className ="cardItem-label" alt="castle_photo" text= "Let's explore the mysterious ancient castles!"/>
            <CardItemComponent path="/products/mountains" img={mountainPhoto} label="Mountain" className ="cardItem-label" alt="mountain_photo" text= "Let's explore the most beautiful mountains!"/>
            <CardItemComponent path="/products/beaches" img={seaPhoto} label="Sea" className ="cardItem-label" alt="sea_photo" text= "Let's explore the amazing beaches!"/>
            <CardItemComponent path="/products/cities" img={cityPhoto} label="City" className ="cardItem-label" alt="city_photo" text= "Let's explore the interesting cities"/>
            <CardItemComponent path="/products/jungle" img={junglePhoto} label="Jungle" className ="cardItem-label" alt="jungle_photo" text= "Let's explore the marvelous jungle!"/>
        </ul>
    </div>
  )
}
