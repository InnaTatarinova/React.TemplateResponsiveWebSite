import React, { useEffect } from 'react'
import MatterhornSwitzerland from "../../assets/img/mountains/matterhorn.jpg"
import DenaliUSA from "../../assets/img/mountains/denali.jpg"
import KirljufellIceland from "../../assets/img/mountains/kirkjufell.jpg"
import TableMountainAfrica from "../../assets/img/mountains/table-Mountain.jpg"
import VinicuncaPeru from "../../assets/img/mountains/vinicunca-Rainbow.jpg"
import FujiJapan from "../../assets/img/mountains/fuji-and-cherry-blossoms.jpg"
import ReinefjordenNorway from "../../assets/img/mountains/Reinefjorden_Norway.jpg"

import { CardItemComponent } from '../InfoCard/CardItemComponent/CardItemComponent'


export const Mountaines = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
 }, []);
  return (
    
        <div className='infoCards'>
            <h2 className='infoCard-title'>MOST INCREDIBLE MOUNTAINS</h2>
            <ul className='infoCard-list'>
                <CardItemComponent path="/products" img={MatterhornSwitzerland} alt="MatterhornSwitzerland" text= "Matterhorn, Switzerland"/>
                <CardItemComponent path="/products" img={DenaliUSA} alt="DenaliUSA" text= "Denali, USA"/>
                <CardItemComponent path="/products" img={KirljufellIceland} alt="KirljufellIceland" text= "Kirkjufell, Iceland"/>
                <CardItemComponent path="/products" img={TableMountainAfrica} alt="TableMountainAfrica" text= "Table Mountain, South Africa"/>
                <CardItemComponent path="/products" img={VinicuncaPeru} alt="VinicuncaPeru" text= "Vinicunca, Peru"/>
                <CardItemComponent path="/products" img={FujiJapan} alt="FujiJapan" text= "Mount Fuji, Japan"/>
                <CardItemComponent path="/products" img={ReinefjordenNorway} alt="ReinefjordenNorway" text= "Reinefjorden, Norway"/>
                
            </ul>
        </div>
      )
}