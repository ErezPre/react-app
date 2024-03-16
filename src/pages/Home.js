import React from "react";

function Home() {
  return (
    <div className="home page">
      <h1>React - Frontend Projects</h1>
      <br />
      <p className="introduction">
        A website displaying some React frontend mini-projects.
        <br /> <br />
        <ul>
          Each page is a different theme project:
          <li>
            <article>
              &#x2022;{" "}
              <u>
                <b>Cocktails</b>
              </u>{" "}
              - demonstrating the use of The Cocktail DB. The user can type
              whichever cocktail he wants in the search bar and get a list of
              cocktails accordingly (e.g. use types "green" - gets all cocktails
              with the word "green" in their names).
            </article>
          </li>
          <li>
            <article>
              &#x2022;{" "}
              <u>
                <b>Fast Food Chains</b>
              </u>{" "}
              - I selected 3 random food chains in Tel Aviv area and displayed
              them on a map using Leaflet API. The user chooses a food chains
              (toggle options) and the map shows 3 branches of the selected food
              chain in Tel Aviv area (click on the chain's logo to see details
              on the specific branch chosen).
            </article>
          </li>
        </ul>
      </p>
    </div>
  );
}

export default Home;
