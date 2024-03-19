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
      <h1>Fast Food Chains Near You</h1>
      <h2 className="introduction">
        I selected 3 random food chains in Tel Aviv area and displayed them on a
        map using Leaflet API. The user chooses a food chains (toggle options)
        and the map shows 3 branches of the selected food chain in Tel Aviv area
        (click on the chain's logo to see details on the specific branch
        chosen).
      </h2>
      {/* {foodChains.map((item) => item + " ")} */}
      {/* <hr /> */}
      {/* {console.log(foodChainsCoordinates)} */}
      <select className="select-food-chain" onChange={handleChange}>
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
