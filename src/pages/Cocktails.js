import React from "react";
import SearchForm from "../components/cocktails/SearchForm";
import CocktailList from "../components/cocktails/CocktailList";

function Cocktails() {
  //SearchForm contains CocktailList component within it
  return (
    <div className="cocktails page">
      <h1>cocktails</h1>
      <h2 className="introduction">
        Demonstrating the use of The Cocktail DB. The user can type whichever
        cocktail he wants in the search bar and get a list of cocktails
        accordingly (e.g. use types "green" - gets all cocktails with the word
        "green" in their names).
      </h2>
      <SearchForm />
    </div>
  );
}

export default Cocktails;
