import React, { useState } from "react";
import CocktailList from "./CocktailList";

/* Handle the search term the user inserts when searching for a cocktail in Cocktails page */
function SearchForm() {
  const [cocktail, setCocktail] = useState("");
  const handleInputChange = (e) => {
    setCocktail(e.target.value);
  };
  return (
    <>
      {/* <h1>seachform</h1> */}
      <form>
        <label className="cocktail-searchform">
          <span className="searchform">Enter cocktail name:</span>{" "}
          <input type="text" value={cocktail} onChange={handleInputChange} />
        </label>
      </form>
      <CocktailList searchTerm={cocktail} />
    </>
  );
}

export default SearchForm;
