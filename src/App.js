import logo from './logo.svg';
import './App.css';

import Header from "./Components/Header.js";
import HomePage from "./Components/HomePage.js";
import CocktailsPage from "./Components/CocktailsPage.js";

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <CocktailsPage />
    </div>
  );
}

export default App;
