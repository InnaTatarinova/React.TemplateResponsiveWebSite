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
            <CardItemComponent path="/products" img={castlePhoto} label="Castle" alt="castle_photo" text= "Let's explore the mysterious ancient castles!"/>
            <CardItemComponent path="/products" img={mountainPhoto} label="Mountain" alt="mountain_photo" text= "Let's explore the most beautiful mountains!"/>
            <CardItemComponent path="/products" img={seaPhoto} label="Sea" alt="sea_photo" text= "Let's explore the amazing beaches!"/>
            <CardItemComponent path="/products" img={cityPhoto} label="City" alt="city_photo" text= "Let's explore the interesting cities"/>
            <CardItemComponent path="/products" img={junglePhoto} label="Jungle" alt="jungle_photo" text= "Let's explore the marvelous jungle!"/>
        </ul>
    </div>
  )
}
