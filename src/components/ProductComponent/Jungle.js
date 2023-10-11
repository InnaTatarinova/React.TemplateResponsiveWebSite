import React, { useEffect } from 'react'
import DaintreeAustralia from "../../assets/img/forest/daintree-national-park-australia.jpg"
import AmazonRainForestBraziliia from "../../assets/img/forest/amazon-Rain-Forest.jpg"
import CaribbeanNatureIslandDominica from "../../assets/img/forest/dominica.jpg"
import GreatBearRainForestCanada from "../../assets/img/forest/great-Bear-Rainforest.jpg"
import RainforestCongo from "../../assets/img/forest/rainforest_congo.jpg"
import JiuzhaigouSichuan from "../../assets/img/forest/jiuzhaigou.jpg"
import BakoMalaysia from "../../assets/img/forest/bako-national-park_malaysia.jpg"




import { CardItemComponent } from '../InfoCard/CardItemComponent/CardItemComponent'


export const Jungle = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
 }, []);
  return (
    
        <div className='infoCards'>
            <h2 className='infoCard-title'>MOST BEAUTIFUL FOREST IN THE WORLD</h2>
            <ul className='infoCard-list'>
                <CardItemComponent path="/products" img={DaintreeAustralia} alt="DaintreeAustralia" text= "Daintree national forest, Australia"/>
                <CardItemComponent path="/products" img={AmazonRainForestBraziliia} alt="AmazonRainForestBraziliia" text= "Amazon Rain Forest, Braziliia"/>
                <CardItemComponent path="/products" img={CaribbeanNatureIslandDominica} alt="CaribbeanNatureIslandDominica" text= "Kirkjufell, Caribbean Nature Island, Dominica"/>
                <CardItemComponent path="/products" img={GreatBearRainForestCanada} alt="GreatBearRainForestCanada" text= "Great Bear RainForest, Canada"/>
                <CardItemComponent path="/products" img={RainforestCongo} alt="RainforestCongo" text= "Rainforest, Congo"/>
                <CardItemComponent path="/products" img={JiuzhaigouSichuan} alt="JiuzhaigouSichuan" text= "Jiuzhaigou, Sichuan"/>
                <CardItemComponent path="/products" img={BakoMalaysia} alt="BakoMalaysia" text= "Bako National Park, Malaysia"/>
                
                
            </ul>
        </div>
      )
}