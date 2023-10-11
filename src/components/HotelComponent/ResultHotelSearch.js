import React, {useState } from "react";
import { Table } from "react-bootstrap";
import {v4, v3} from 'uuid' 

export const ResultHotelSearch = (props) => {
  const { resultData, setResultData } = useState([]);

  const getAditionalInfo = async (e1, e2) => {
    const request = `http://engine.hotellook.com/api/v2/cache.json?locationId=${e1}&hotelId=${e2}&checkIn=2023-09-13&checkOut=2023-09-18&currency=usd&limit=10`;

    const response = await fetch(request);
    const result = await response.json();
    // setResultData(result);
    console.log(result);
  };

  const getStar = Array.from({ length: Math.floor(Math.random() * 5) + 1 }, (_, i) => <i key={i} />);


  return (
    <div>
      <Table striped bordered hover>
        <tbody>
          {props.data.results.hotels.map((value) => {
            return (
              <tr
                key ={(v4)}
                onClick={ () => getAditionalInfo (value.locationId, value.id)}
              >
                <td>{value.name}</td>
                <td>{props.cityNameFrom}</td>
                <td> 
                 {Array.from({ length: Math.floor(Math.random() * 5) + 1 }).map(() =>{
                  return(
                    <i className="bi bi-star" key ={(v3)}></i>
                  )
                 })}
                </td>
                <td> 
                  from: ${Math.floor(Math.random()*100)+50}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
