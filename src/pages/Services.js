import React, { useEffect, useState } from "react";
import { BannerForPages } from "../components/BannerForPages/BannerForPages";
import { BudgetComponent } from "../components/BudgetComponent/BudgetComponent";
import service_banner from "../assets/img/service_banner2.jpg";
import "../App.css";
import { PageComponent } from "../components/PageComponent/PageComponent";
import { CarComponent } from "../components/CarComponent/CarComponent";
import { HotelSearch } from "../components/HotelComponent/HotelSearch";
import { FlightSearch } from "../components/FlightComponent/FlightSearch";

export const Services = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
 }, []);

  const ServiceType = {
    Hotel: 0,
    Flight: 1,
    Car: 2,
    Budget: 3
  }

  // const [wasClickedHotel, clickedHotel] = useState(true);
  // const [wasClickedFlight, clickedFlight] = useState(false);
  // const [wasClickedCar, clickedCar] = useState(false);
  // const [wasClickedBudget, clickedBudget] = useState(false);

  const [selectedService, setSelectedService] = useState(ServiceType.Hotel);



  const chooseMenuBtn = (e) => {
    // clickedHotel(false);
    // clickedBudget(false);
    // clickedCar(false);
    // clickedFlight(false);

    

    switch (e.target.innerHTML) {
      case "Book a hotel":
        // clickedHotel(true);
        setSelectedService(ServiceType.Hotel);
        break;
      case "Find a flight":
        // clickedFlight(true);
        setSelectedService(ServiceType.Flight);
        break;
      case "Rent a car":
        //clickedCar(true);
        setSelectedService(ServiceType.Car);
        break;
      case "Plan a budget":
        //clickedBudget(true);
        setSelectedService(ServiceType.Budget);
        break;
      default:
        //clickedHotel(true);
        setSelectedService(ServiceType.Hotel);
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

      {/* <div className="mainPageInfo">
        {wasClickedHotel === true ? (
          <div>
            <PageComponent name="Hotel" component={<HotelSearch/>} />
          </div>
        ) : wasClickedCar === true ? (
          <div>
            <PageComponent name="Car" component={<CarComponent />} />
          </div>
        ) : wasClickedBudget === true ? (
          <div>
            <BudgetComponent />
          </div>
        ) : wasClickedFlight === true ? (
          <div>
            <PageComponent name="Flight" component={<FlightSearch />} />
          </div>
        ) 
         : null}
      </div> */}

      <div className="mainPageInfo">
        {selectedService === ServiceType.Hotel ? (
          <div>
            <PageComponent name="My Hotel Planner" component={<HotelSearch/>} />
          </div>
        ) : selectedService === ServiceType.Car ? (
          <div>
            <PageComponent name="My Car rent Planner" component={<CarComponent />} />
          </div>
        ) : selectedService === ServiceType.Budget ? (
          <div>
            <BudgetComponent />
          </div>
        ) : selectedService === ServiceType.Flight ? (
          <div>
            <PageComponent name="My Flight planner" component={<FlightSearch />} />
          </div>
        ) 
         : null}
      </div>
    </div>
  );
};
