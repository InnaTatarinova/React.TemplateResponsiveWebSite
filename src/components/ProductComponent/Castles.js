import React, { useEffect } from 'react'
import PelesCastleRomania from "../../assets/img/castle/peles-castle-sinaia-1.jpg"
import ChapultepecMexico from "../../assets/img/castle/chapultepecCastle.jpg"
import QaitbayEgypt from "../../assets/img/castle/the-citadel-of-Qaitbay-in-Alexandria.jpg"
import MatsumotoJapan from "../../assets/img/castle/matsumoto-castle.jpg"
import BojniceSlovakia from "../../assets/img/castle/bojnice_slovakia.jpg"
import FasilGhebbiEthiopia from "../../assets/img/castle/fasilGhebbi.jpg"
import ChateauDeChenonceauFrance from "../../assets/img/castle/chateauDeChenonceau.jpg"
import { CardItemComponent } from '../InfoCard/CardItemComponent/CardItemComponent'


export const Castles = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
 }, []);


  return (
    
        <div className='infoCards'>
            <h2 className='infoCard-title'>MOST POPULAR CASTLES</h2>
            <ul className='infoCard-list'>
                <CardItemComponent path="/products" img={PelesCastleRomania} alt="PelesCastleRomania" text= "Peleș Castle in Sinaia, Romania"/>
                <CardItemComponent path="/products" img={ChapultepecMexico} alt="ChapultepecMexico" text= "Chapultepec Castle in Mexico City, Mexico"/>
                <CardItemComponent path="/products" img={QaitbayEgypt} alt="QaitbayEgypt" text= "Qaitbay Fort in Alexandria, Egypt"/>
                <CardItemComponent path="/products" img={MatsumotoJapan} alt="MatsumotoJapan" text= "Matsumoto Castle in Matsumoto, Japan"/>
                <CardItemComponent path="/products" img={BojniceSlovakia} alt="BojniceSlovakia" text= "Bojnice Castle in Bojnice, Slovakia"/>
                <CardItemComponent path="/products" img={FasilGhebbiEthiopia} alt="FasilGhebbiEthiopia" text= "Fasil Ghebbi in Gondar, Ethiopia"/>
                <CardItemComponent path="/products" img={ChateauDeChenonceauFrance} alt="ChateauDeChenonceauFrance" text= "Château de Chenonceau in Chenonceaux, France"/>
            </ul>
        </div>
      )
}
