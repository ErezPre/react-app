import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

/* Renders the cocktail list in Cocktails page according to the seach term inserted by the user */
function CocktailList({ searchTerm }) {
  const [cocktailList, setCocktailList] = useState([]);
  useEffect(() => {
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
    )
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        setCocktailList(responseJson.drinks);
      })
      .catch((error) => {
        console.log(error);
      });
    // console.log("cocktaillist", cocktailList);
  }, [searchTerm]);
  if (!cocktailList) {
    return <h1>there are no cocktails matching your search</h1>;
  }
  return (
    <>
      {/* <h1>CocktailList</h1> */}
      <div className="cocktail-list">
        {cocktailList.map((item) => {
          return (
            <>
              <Link
                to={`/cocktails/${item.idDrink}`}
                className="cocktail-list-item"
              >
                <h3 className="cocktail-list-item-header">{item.strDrink}</h3>
                <img
                  className="drink-img"
                  src={item.strDrinkThumb}
                  alt={item.strDrink}
                />
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
}

export default CocktailList;
