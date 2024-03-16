import React, { useEffect, useState } from "react";
import Map1 from "../components/Map1";
import "./FastFood.css";
import jsonData from "../resources/FastFoodCoordinates.json";

function FastFood() {
  const foodChains = ["McDonald's", "Domino's Pizza", "Burger King"];
  const foodChainsCoordinates = JSON.stringify(jsonData, null, 2);
  const [preferredFoodChain, setPreferredFoodChain] = useState("McDonald's");
  const foodChain = jsonData.foodChains.find(
    (item) => item.name === preferredFoodChain
  );
  const logo = foodChain.logo;
  const foodChainLocations = foodChain.locations;

  const handleChange = (event) => setPreferredFoodChain(event.target.value);

  return (
    <div className="fastfood page">
      <h1>Fast Food Places Near You</h1>
      <h2>choose a fast food chain and a location</h2>
      {foodChains.map((item) => item + " ")}
      <hr />
      {/* {console.log(foodChainsCoordinates)} */}
      <select onChange={handleChange}>
        <option value="McDonald's">McDonald's</option>
        <option value="Domino's Pizza">Domino's Pizza</option>
        <option value="Burger King">Burger King</option>
      </select>
      <div className="map">
        <Map1 locations={foodChainLocations} logo={logo} />
        {console.log(preferredFoodChain)}
      </div>
    </div>
  );
}

export default FastFood;
