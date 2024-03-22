import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

/* Renders a single Cocktail page when clicking on a cocktail in the Cocktails page.
The {id} prop is given via useParams hook, and the full cocktail information is fetched from www.thecocktaildb.com using useEffect hook. All of the cocktail info is then stored at 'cocktail' variable using useState hook and presented across the page.
 */
function Cocktail() {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    async function getCocktail() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await response.json();
        console.log("id is", id);
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };
          setCocktail(newCocktail);
          console.log(newCocktail.name);
        } else {
          setCocktail(null);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getCocktail();
  }, [id]);

  if (cocktail) {
    const { name, image, category, info, glass, instructions, ingredients } =
      cocktail;
    return (
      <div className="page">
        <h1>{name}</h1>
        <section className="cocktail-card">
          <img className="cocktail-image" src={image} alt={info} />
          <div className="cocktail-descriptions">
            <p className="cocktail-description">
              <b>name:</b> {name}
            </p>
            <p className="cocktail-description">
              <b>category:</b> {category}
            </p>
            <p className="cocktail-description">
              <b>is alcoholic?</b> {info}
            </p>
            <p className="cocktail-description">
              <b>glass:</b> {glass}
            </p>
            <p className="cocktail-description">
              <b>instructions:</b> {instructions}
            </p>
            <p className="cocktail-description">
              <b>ingredients:</b>{" "}
              {ingredients.map((ingredient, index) => {
                if (ingredient) {
                  return <span key={index}>&#x2022; {ingredient} </span>;
                }
              })}
            </p>
          </div>
        </section>
      </div>
    );
  }
}

export default Cocktail;
