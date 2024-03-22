import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import Cocktails from "./pages/Cocktails";
import Cocktail from "./pages/Cocktail";
import FastFood from "./pages/FastFood";

/* Automatically scrolls to the top when loading a new page */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

/* Main routing for the app */
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/cocktails" element={<Cocktails />} />
        <Route path="/cocktails/:id" element={<Cocktail />} />
        <Route path="/FastFood" element={<FastFood />} />
        <Route path="/resources/FastFoodCoordinates.json" />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
