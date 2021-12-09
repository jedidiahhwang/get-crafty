import './App.css';

import Header from "./Components/Header.js";
import CocktailsPage from "./Components/CocktailsPage.js";
import AboutPage from "./Components/AboutPage.js";

import routes from "./routes";

function App() {
  return (
    <div className="App">
      {routes}
    </div>
  );
}

export default App;
