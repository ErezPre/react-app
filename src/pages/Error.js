import React from "react";

/* Handles accessing a url that doesn't exist across the website */
function Error() {
  return (
    <div className="page">
      <h1>404 - Page Not Found</h1>
      <p className="page-not-found">
        Sorry, the page you are looking for does not exist
      </p>
    </div>
  );
}

export default Error;
