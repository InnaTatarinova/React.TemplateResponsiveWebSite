import React, { useState } from "react";
import  {BannerForPages}  from "../components/BannerForPages/BannerForPages";
import  {BudgetComponent}  from "../components/BudgetComponent/BudgetComponent";
import service_banner from "../assets/img/service_banner2.jpg";
import "../App.css";
import { HotelComponent } from "../components/HotelComponent/HotelComponent";



export const Services = () => {
 
    const [wasClickedHotel, clickedHotel] = useState(true);
    const [wasClickedFlight, clickedFlight] = useState(false);
    const [wasClickedCar, clickedCar] = useState(false);
    const [wasClickedBudget, clickedBudget] = useState(false);
  
    const chooseMenuBtn = (e) => {
      clickedHotel(false);
      clickedBudget(false);
      clickedCar(false);
      clickedFlight(false);
  
      switch (e.target.innerHTML) {
        case "Book a hotel":
          clickedHotel(true);
          break;
        case "Find a flight":
          clickedFlight(true);
          break;
        case "Rent a car":
          clickedCar(true);
          break;
        case "Plan a budget":
          clickedBudget(true);
          break;
          default: clickedHotel(true);
      }
    };
  
    return (
      <div>
        <BannerForPages
          img={service_banner}
          alt="service banner"
          text="We will prepare everything YOU may need"
          btnClick={chooseMenuBtn}
          btnArray={[
            "Book a hotel",
            "Find a flight",
            "Rent a car",
            "Plan a budget",
          ]}
        />
  
        <div className="mainPageInfo">
          {wasClickedHotel === true ? (
            <div>
              <HotelComponent/>
            </div>
          ) : wasClickedCar === true ? (
            <div>Car</div>
          ) : wasClickedBudget === true ? (
            <div>
              <BudgetComponent />
            </div>
          ) : wasClickedFlight === true ? (
            <div>Flight</div>
          ) : null}
        </div>
      </div>
    );
  
}






