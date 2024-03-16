import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Cocktail() {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState();
  useEffect(() => {
    const selectedCocktail = fetch(
      `www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    )
      .then((response) => response.json())
      .then((response) => response.drinks[0])
      .catch((error) => {
        console.log(error);
      });
    const { strDrink } = selectedCocktail;
  }, [id]);
  return (
    <>
      <h1 className="cocktail page">Cocktail {id}</h1>
    </>
  );
}

export default Cocktail;
