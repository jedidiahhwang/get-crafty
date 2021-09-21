import './App.css';

import Header from "./Components/Header.js";
import HomePage from "./Components/HomePage.js";
import CocktailsPage from "./Components/CocktailsPage.js";
import AboutPage from "./Components/AboutPage.js";

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <CocktailsPage />
      <AboutPage />
    </div>
  );
}

export default App;
